// ==========================================================================
// Certificate Authority API (privateca v1)
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
  name: "privateca",
  version: "v1",
  rootUrl: "https://privateca.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface EnableCertificateAuthorityRequest {
  /** Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const EnableCertificateAuthorityRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "EnableCertificateAuthorityRequest" });

export interface EcKeyType {
  /** Optional. A signature algorithm that must be used. If this is omitted, any EC-based signature algorithm will be allowed. */
  signatureAlgorithm?:
    | "EC_SIGNATURE_ALGORITHM_UNSPECIFIED"
    | "ECDSA_P256"
    | "ECDSA_P384"
    | "EDDSA_25519"
    | (string & {});
}

export const EcKeyType = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  signatureAlgorithm: Schema.optional(Schema.String),
}).annotate({ identifier: "EcKeyType" });

export interface ObjectId {
  /** Required. The parts of an OID path. The most significant parts of the path come first. */
  objectIdPath?: ReadonlyArray<number>;
}

export const ObjectId = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  objectIdPath: Schema.optional(Schema.Array(Schema.Number)),
}).annotate({ identifier: "ObjectId" });

export interface ExtendedKeyUsageOptions {
  /** Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses". */
  ocspSigning?: boolean;
  /** Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS. */
  clientAuth?: boolean;
  /** Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection". */
  emailProtection?: boolean;
  /** Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time". */
  timeStamping?: boolean;
  /** Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication". */
  codeSigning?: boolean;
  /** Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS. */
  serverAuth?: boolean;
}

export const ExtendedKeyUsageOptions =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ocspSigning: Schema.optional(Schema.Boolean),
    clientAuth: Schema.optional(Schema.Boolean),
    emailProtection: Schema.optional(Schema.Boolean),
    timeStamping: Schema.optional(Schema.Boolean),
    codeSigning: Schema.optional(Schema.Boolean),
    serverAuth: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ExtendedKeyUsageOptions" });

export interface KeyUsageOptions {
  /** The key may be used sign certificate revocation lists. */
  crlSign?: boolean;
  /** The key may be used to encipher other keys. */
  keyEncipherment?: boolean;
  /** The key may be used to decipher only. */
  decipherOnly?: boolean;
  /** The key may be used to sign certificates. */
  certSign?: boolean;
  /** The key may be used in a key agreement protocol. */
  keyAgreement?: boolean;
  /** The key may be used to encipher only. */
  encipherOnly?: boolean;
  /** The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation". */
  contentCommitment?: boolean;
  /** The key may be used to encipher data. */
  dataEncipherment?: boolean;
  /** The key may be used for digital signatures. */
  digitalSignature?: boolean;
}

export const KeyUsageOptions = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  crlSign: Schema.optional(Schema.Boolean),
  keyEncipherment: Schema.optional(Schema.Boolean),
  decipherOnly: Schema.optional(Schema.Boolean),
  certSign: Schema.optional(Schema.Boolean),
  keyAgreement: Schema.optional(Schema.Boolean),
  encipherOnly: Schema.optional(Schema.Boolean),
  contentCommitment: Schema.optional(Schema.Boolean),
  dataEncipherment: Schema.optional(Schema.Boolean),
  digitalSignature: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "KeyUsageOptions" });

export interface KeyUsage {
  /** Used to describe extended key usages that are not listed in the KeyUsage.ExtendedKeyUsageOptions message. */
  unknownExtendedKeyUsages?: ReadonlyArray<ObjectId>;
  /** Detailed scenarios in which a key may be used. */
  extendedKeyUsage?: ExtendedKeyUsageOptions;
  /** Describes high-level ways in which a key may be used. */
  baseKeyUsage?: KeyUsageOptions;
}

export const KeyUsage = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  unknownExtendedKeyUsages: Schema.optional(Schema.Array(ObjectId)),
  extendedKeyUsage: Schema.optional(ExtendedKeyUsageOptions),
  baseKeyUsage: Schema.optional(KeyUsageOptions),
}).annotate({ identifier: "KeyUsage" });

export interface X509Extension {
  /** Required. The value of this X.509 extension. */
  value?: string;
  /** Required. The OID for this X.509 extension. */
  objectId?: ObjectId;
  /** Optional. Indicates whether or not this extension is critical (i.e., if the client does not know how to handle this extension, the client should consider this to be an error). */
  critical?: boolean;
}

export const X509Extension = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.String),
  objectId: Schema.optional(ObjectId),
  critical: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "X509Extension" });

export interface NameConstraints {
  /** Contains the permitted email addresses. The value can be a particular email address, a hostname to indicate all email addresses on that host or a domain with a leading period (e.g. `.example.com`) to indicate all email addresses in that domain. */
  permittedEmailAddresses?: ReadonlyArray<string>;
  /** Contains the permitted URIs that apply to the host part of the name. The value can be a hostname or a domain with a leading period (like `.example.com`) */
  permittedUris?: ReadonlyArray<string>;
  /** Indicates whether or not the name constraints are marked critical. */
  critical?: boolean;
  /** Contains excluded DNS names. Any DNS name that can be constructed by simply adding zero or more labels to the left-hand side of the name satisfies the name constraint. For example, `example.com`, `www.example.com`, `www.sub.example.com` would satisfy `example.com` while `example1.com` does not. */
  excludedDnsNames?: ReadonlyArray<string>;
  /** Contains the excluded URIs that apply to the host part of the name. The value can be a hostname or a domain with a leading period (like `.example.com`) */
  excludedUris?: ReadonlyArray<string>;
  /** Contains permitted DNS names. Any DNS name that can be constructed by simply adding zero or more labels to the left-hand side of the name satisfies the name constraint. For example, `example.com`, `www.example.com`, `www.sub.example.com` would satisfy `example.com` while `example1.com` does not. */
  permittedDnsNames?: ReadonlyArray<string>;
  /** Contains the excluded email addresses. The value can be a particular email address, a hostname to indicate all email addresses on that host or a domain with a leading period (e.g. `.example.com`) to indicate all email addresses in that domain. */
  excludedEmailAddresses?: ReadonlyArray<string>;
  /** Contains the permitted IP ranges. For IPv4 addresses, the ranges are expressed using CIDR notation as specified in RFC 4632. For IPv6 addresses, the ranges are expressed in similar encoding as IPv4 addresses. */
  permittedIpRanges?: ReadonlyArray<string>;
  /** Contains the excluded IP ranges. For IPv4 addresses, the ranges are expressed using CIDR notation as specified in RFC 4632. For IPv6 addresses, the ranges are expressed in similar encoding as IPv4 addresses. */
  excludedIpRanges?: ReadonlyArray<string>;
}

export const NameConstraints = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  permittedEmailAddresses: Schema.optional(Schema.Array(Schema.String)),
  permittedUris: Schema.optional(Schema.Array(Schema.String)),
  critical: Schema.optional(Schema.Boolean),
  excludedDnsNames: Schema.optional(Schema.Array(Schema.String)),
  excludedUris: Schema.optional(Schema.Array(Schema.String)),
  permittedDnsNames: Schema.optional(Schema.Array(Schema.String)),
  excludedEmailAddresses: Schema.optional(Schema.Array(Schema.String)),
  permittedIpRanges: Schema.optional(Schema.Array(Schema.String)),
  excludedIpRanges: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "NameConstraints" });

export interface CaOptions {
  /** Optional. Refers to the "CA" boolean field in the X.509 extension. When this value is missing, the basic constraints extension will be omitted from the certificate. */
  isCa?: boolean;
  /** Optional. Refers to the path length constraint field in the X.509 extension. For a CA certificate, this value describes the depth of subordinate CA certificates that are allowed. If this value is less than 0, the request will fail. If this value is missing, the max path length will be omitted from the certificate. */
  maxIssuerPathLength?: number;
}

export const CaOptions = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  isCa: Schema.optional(Schema.Boolean),
  maxIssuerPathLength: Schema.optional(Schema.Number),
}).annotate({ identifier: "CaOptions" });

export interface X509Parameters {
  /** Optional. Indicates the intended use for keys that correspond to a certificate. */
  keyUsage?: KeyUsage;
  /** Optional. Describes custom X.509 extensions. */
  additionalExtensions?: ReadonlyArray<X509Extension>;
  /** Optional. Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the "Authority Information Access" extension in the certificate. */
  aiaOcspServers?: ReadonlyArray<string>;
  /** Optional. Describes the X.509 name constraints extension. */
  nameConstraints?: NameConstraints;
  /** Optional. Describes options in this X509Parameters that are relevant in a CA certificate. If not specified, a default basic constraints extension with `is_ca=false` will be added for leaf certificates. */
  caOptions?: CaOptions;
  /** Optional. Describes the X.509 certificate policy object identifiers, per https://tools.ietf.org/html/rfc5280#section-4.2.1.4. */
  policyIds?: ReadonlyArray<ObjectId>;
}

export const X509Parameters = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  keyUsage: Schema.optional(KeyUsage),
  additionalExtensions: Schema.optional(Schema.Array(X509Extension)),
  aiaOcspServers: Schema.optional(Schema.Array(Schema.String)),
  nameConstraints: Schema.optional(NameConstraints),
  caOptions: Schema.optional(CaOptions),
  policyIds: Schema.optional(Schema.Array(ObjectId)),
}).annotate({ identifier: "X509Parameters" });

export interface KeyId {
  /** Optional. The value of this KeyId encoded in lowercase hexadecimal. This is most likely the 160 bit SHA-1 hash of the public key. */
  keyId?: string;
}

export const KeyId = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  keyId: Schema.optional(Schema.String),
}).annotate({ identifier: "KeyId" });

export interface PublicKey {
  /** Required. The format of the public key. */
  format?: "KEY_FORMAT_UNSPECIFIED" | "PEM" | (string & {});
  /** Required. A public key. The padding and encoding must match with the `KeyFormat` value specified for the `format` field. */
  key?: string;
}

export const PublicKey = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  format: Schema.optional(Schema.String),
  key: Schema.optional(Schema.String),
}).annotate({ identifier: "PublicKey" });

export interface CertificateFingerprint {
  /** The SHA 256 hash, encoded in hexadecimal, of the DER x509 certificate. */
  sha256Hash?: string;
}

export const CertificateFingerprint = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    sha256Hash: Schema.optional(Schema.String),
  },
).annotate({ identifier: "CertificateFingerprint" });

export interface SubjectAltNames {
  /** Contains only valid, fully-qualified host names. */
  dnsNames?: ReadonlyArray<string>;
  /** Contains only valid RFC 3986 URIs. */
  uris?: ReadonlyArray<string>;
  /** Contains only valid RFC 2822 E-mail addresses. */
  emailAddresses?: ReadonlyArray<string>;
  /** Contains additional subject alternative name values. For each custom_san, the `value` field must contain an ASN.1 encoded UTF8String. */
  customSans?: ReadonlyArray<X509Extension>;
  /** Contains only valid 32-bit IPv4 addresses or RFC 4291 IPv6 addresses. */
  ipAddresses?: ReadonlyArray<string>;
}

export const SubjectAltNames = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dnsNames: Schema.optional(Schema.Array(Schema.String)),
  uris: Schema.optional(Schema.Array(Schema.String)),
  emailAddresses: Schema.optional(Schema.Array(Schema.String)),
  customSans: Schema.optional(Schema.Array(X509Extension)),
  ipAddresses: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "SubjectAltNames" });

export interface AttributeTypeAndValue {
  /** Object ID for an attribute type of an attribute and value pair. */
  objectId?: ObjectId;
  /** The attribute type of the attribute and value pair. */
  type?:
    | "ATTRIBUTE_TYPE_UNSPECIFIED"
    | "COMMON_NAME"
    | "COUNTRY_CODE"
    | "ORGANIZATION"
    | "ORGANIZATIONAL_UNIT"
    | "LOCALITY"
    | "PROVINCE"
    | "STREET_ADDRESS"
    | "POSTAL_CODE"
    | (string & {});
  /** The value for the attribute type. */
  value?: string;
}

export const AttributeTypeAndValue = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  objectId: Schema.optional(ObjectId),
  type: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
}).annotate({ identifier: "AttributeTypeAndValue" });

export interface RelativeDistinguishedName {
  /** Attributes describes the attribute value assertions in the RDN. */
  attributes?: ReadonlyArray<AttributeTypeAndValue>;
}

export const RelativeDistinguishedName =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attributes: Schema.optional(Schema.Array(AttributeTypeAndValue)),
  }).annotate({ identifier: "RelativeDistinguishedName" });

export interface Subject {
  /** This field can be used in place of the named subject fields. */
  rdnSequence?: ReadonlyArray<RelativeDistinguishedName>;
  /** The organizational_unit of the subject. */
  organizationalUnit?: string;
  /** The organization of the subject. */
  organization?: string;
  /** The street address of the subject. */
  streetAddress?: string;
  /** The province, territory, or regional state of the subject. */
  province?: string;
  /** The "common name" of the subject. */
  commonName?: string;
  /** The country code of the subject. */
  countryCode?: string;
  /** The locality or city of the subject. */
  locality?: string;
  /** The postal code of the subject. */
  postalCode?: string;
}

export const Subject = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  rdnSequence: Schema.optional(Schema.Array(RelativeDistinguishedName)),
  organizationalUnit: Schema.optional(Schema.String),
  organization: Schema.optional(Schema.String),
  streetAddress: Schema.optional(Schema.String),
  province: Schema.optional(Schema.String),
  commonName: Schema.optional(Schema.String),
  countryCode: Schema.optional(Schema.String),
  locality: Schema.optional(Schema.String),
  postalCode: Schema.optional(Schema.String),
}).annotate({ identifier: "Subject" });

export interface SubjectDescription {
  /** For convenience, the actual lifetime of an issued certificate. */
  lifetime?: string;
  /** The subject alternative name fields. */
  subjectAltName?: SubjectAltNames;
  /** Contains distinguished name fields such as the common name, location and / organization. */
  subject?: Subject;
  /** The serial number encoded in lowercase hexadecimal. */
  hexSerialNumber?: string;
  /** The time after which the certificate is expired. Per RFC 5280, the validity period for a certificate is the period of time from not_before_time through not_after_time, inclusive. Corresponds to 'not_before_time' + 'lifetime' - 1 second. */
  notAfterTime?: string;
  /** The time at which the certificate becomes valid. */
  notBeforeTime?: string;
}

export const SubjectDescription = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  lifetime: Schema.optional(Schema.String),
  subjectAltName: Schema.optional(SubjectAltNames),
  subject: Schema.optional(Subject),
  hexSerialNumber: Schema.optional(Schema.String),
  notAfterTime: Schema.optional(Schema.String),
  notBeforeTime: Schema.optional(Schema.String),
}).annotate({ identifier: "SubjectDescription" });

export interface CertificateDescription {
  /** Describes some of the technical X.509 fields in a certificate. */
  x509Description?: X509Parameters;
  /** Identifies the subject_key_id of the parent certificate, per https://tools.ietf.org/html/rfc5280#section-4.2.1.1 */
  authorityKeyId?: KeyId;
  /** Provides a means of identifiying certificates that contain a particular public key, per https://tools.ietf.org/html/rfc5280#section-4.2.1.2. */
  subjectKeyId?: KeyId;
  /** Describes lists of issuer CA certificate URLs that appear in the "Authority Information Access" extension in the certificate. */
  aiaIssuingCertificateUrls?: ReadonlyArray<string>;
  /** The public key that corresponds to an issued certificate. */
  publicKey?: PublicKey;
  /** The hash of the x.509 certificate. */
  certFingerprint?: CertificateFingerprint;
  /** Describes some of the values in a certificate that are related to the subject and lifetime. */
  subjectDescription?: SubjectDescription;
  /** Describes a list of locations to obtain CRL information, i.e. the DistributionPoint.fullName described by https://tools.ietf.org/html/rfc5280#section-4.2.1.13 */
  crlDistributionPoints?: ReadonlyArray<string>;
  /** The hash of the pre-signed certificate, which will be signed by the CA. Corresponds to the TBS Certificate in https://tools.ietf.org/html/rfc5280#section-4.1.2. The field will always be populated. */
  tbsCertificateDigest?: string;
}

export const CertificateDescription = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    x509Description: Schema.optional(X509Parameters),
    authorityKeyId: Schema.optional(KeyId),
    subjectKeyId: Schema.optional(KeyId),
    aiaIssuingCertificateUrls: Schema.optional(Schema.Array(Schema.String)),
    publicKey: Schema.optional(PublicKey),
    certFingerprint: Schema.optional(CertificateFingerprint),
    subjectDescription: Schema.optional(SubjectDescription),
    crlDistributionPoints: Schema.optional(Schema.Array(Schema.String)),
    tbsCertificateDigest: Schema.optional(Schema.String),
  },
).annotate({ identifier: "CertificateDescription" });

export interface RevocationDetails {
  /** The time at which this Certificate was revoked. */
  revocationTime?: string;
  /** Indicates why a Certificate was revoked. */
  revocationState?:
    | "REVOCATION_REASON_UNSPECIFIED"
    | "KEY_COMPROMISE"
    | "CERTIFICATE_AUTHORITY_COMPROMISE"
    | "AFFILIATION_CHANGED"
    | "SUPERSEDED"
    | "CESSATION_OF_OPERATION"
    | "CERTIFICATE_HOLD"
    | "PRIVILEGE_WITHDRAWN"
    | "ATTRIBUTE_AUTHORITY_COMPROMISE"
    | (string & {});
}

export const RevocationDetails = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  revocationTime: Schema.optional(Schema.String),
  revocationState: Schema.optional(Schema.String),
}).annotate({ identifier: "RevocationDetails" });

export interface CertificateConfigKeyId {
  /** Required. The value of this KeyId encoded in lowercase hexadecimal. This is most likely the 160 bit SHA-1 hash of the public key. */
  keyId?: string;
}

export const CertificateConfigKeyId = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    keyId: Schema.optional(Schema.String),
  },
).annotate({ identifier: "CertificateConfigKeyId" });

export interface SubjectConfig {
  /** Optional. Contains distinguished name fields such as the common name, location and organization. */
  subject?: Subject;
  /** Optional. The subject alternative name fields. */
  subjectAltName?: SubjectAltNames;
}

export const SubjectConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subject: Schema.optional(Subject),
  subjectAltName: Schema.optional(SubjectAltNames),
}).annotate({ identifier: "SubjectConfig" });

export interface CertificateConfig {
  /** Optional. When specified this provides a custom SKI to be used in the certificate. This should only be used to maintain a SKI of an existing CA originally created outside CA service, which was not generated using method (1) described in RFC 5280 section 4.2.1.2. */
  subjectKeyId?: CertificateConfigKeyId;
  /** Required. Describes how some of the technical X.509 fields in a certificate should be populated. */
  x509Config?: X509Parameters;
  /** Optional. The public key that corresponds to this config. This is, for example, used when issuing Certificates, but not when creating a self-signed CertificateAuthority or CertificateAuthority CSR. */
  publicKey?: PublicKey;
  /** Required. Specifies some of the values in a certificate that are related to the subject. */
  subjectConfig?: SubjectConfig;
}

export const CertificateConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subjectKeyId: Schema.optional(CertificateConfigKeyId),
  x509Config: Schema.optional(X509Parameters),
  publicKey: Schema.optional(PublicKey),
  subjectConfig: Schema.optional(SubjectConfig),
}).annotate({ identifier: "CertificateConfig" });

export interface Certificate {
  /** Immutable. The resource name for a CertificateTemplate used to issue this certificate, in the format `projects/* /locations/* /certificateTemplates/*`. If this is specified, the caller must have the necessary permission to use this template. If this is omitted, no template will be used. This template must be in the same location as the Certificate. */
  certificateTemplate?: string;
  /** Output only. The pem-encoded, signed X.509 certificate. */
  pemCertificate?: string;
  /** Output only. The time at which this Certificate was updated. */
  updateTime?: string;
  /** Identifier. The resource name for this Certificate in the format `projects/* /locations/* /caPools/* /certificates/*`. */
  name?: string;
  /** Output only. The time at which this Certificate was created. */
  createTime?: string;
  /** Output only. The resource name of the issuing CertificateAuthority in the format `projects/* /locations/* /caPools/* /certificateAuthorities/*`. */
  issuerCertificateAuthority?: string;
  /** Immutable. Specifies how the Certificate's identity fields are to be decided. If this is omitted, the `DEFAULT` subject mode will be used. */
  subjectMode?:
    | "SUBJECT_REQUEST_MODE_UNSPECIFIED"
    | "DEFAULT"
    | "RDN_SEQUENCE"
    | "REFLECTED_SPIFFE"
    | (string & {});
  /** Required. Immutable. The desired lifetime of a certificate. Used to create the "not_before_time" and "not_after_time" fields inside an X.509 certificate. Note that the lifetime may be truncated if it would extend past the life of any certificate authority in the issuing chain. */
  lifetime?: string;
  /** Output only. A structured description of the issued X.509 certificate. */
  certificateDescription?: CertificateDescription;
  /** Immutable. A pem-encoded X.509 certificate signing request (CSR). */
  pemCsr?: string;
  /** Optional. Labels with user-defined metadata. */
  labels?: Record<string, string>;
  /** Output only. Details regarding the revocation of this Certificate. This Certificate is considered revoked if and only if this field is present. */
  revocationDetails?: RevocationDetails;
  /** Output only. The chain that may be used to verify the X.509 certificate. Expected to be in issuer-to-root order according to RFC 5246. */
  pemCertificateChain?: ReadonlyArray<string>;
  /** Immutable. A description of the certificate and key that does not require X.509 or ASN.1. */
  config?: CertificateConfig;
}

export const Certificate = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  certificateTemplate: Schema.optional(Schema.String),
  pemCertificate: Schema.optional(Schema.String),
  updateTime: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
  issuerCertificateAuthority: Schema.optional(Schema.String),
  subjectMode: Schema.optional(Schema.String),
  lifetime: Schema.optional(Schema.String),
  certificateDescription: Schema.optional(CertificateDescription),
  pemCsr: Schema.optional(Schema.String),
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  revocationDetails: Schema.optional(RevocationDetails),
  pemCertificateChain: Schema.optional(Schema.Array(Schema.String)),
  config: Schema.optional(CertificateConfig),
}).annotate({ identifier: "Certificate" });

export interface SubordinateConfigChain {
  /** Required. Expected to be in leaf-to-root order according to RFC 5246. */
  pemCertificates?: ReadonlyArray<string>;
}

export const SubordinateConfigChain = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    pemCertificates: Schema.optional(Schema.Array(Schema.String)),
  },
).annotate({ identifier: "SubordinateConfigChain" });

export interface SubordinateConfig {
  /** Required. Contains the PEM certificate chain for the issuers of this CertificateAuthority, but not pem certificate for this CA itself. */
  pemIssuerChain?: SubordinateConfigChain;
  /** Required. This can refer to a CertificateAuthority that was used to create a subordinate CertificateAuthority. This field is used for information and usability purposes only. The resource name is in the format `projects/* /locations/* /caPools/* /certificateAuthorities/*`. */
  certificateAuthority?: string;
}

export const SubordinateConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pemIssuerChain: Schema.optional(SubordinateConfigChain),
  certificateAuthority: Schema.optional(Schema.String),
}).annotate({ identifier: "SubordinateConfig" });

export interface UserDefinedAccessUrls {
  /** Optional. A list of URLs where the issuer CA certificate may be downloaded, which appears in the "Authority Information Access" extension in the certificate. If specified, the default Cloud Storage URLs will be omitted. */
  aiaIssuingCertificateUrls?: ReadonlyArray<string>;
  /** Optional. A list of URLs where to obtain CRL information, i.e. the DistributionPoint.fullName described by https://tools.ietf.org/html/rfc5280#section-4.2.1.13. If specified, the default Cloud Storage URLs will be omitted. */
  crlAccessUrls?: ReadonlyArray<string>;
}

export const UserDefinedAccessUrls = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  aiaIssuingCertificateUrls: Schema.optional(Schema.Array(Schema.String)),
  crlAccessUrls: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "UserDefinedAccessUrls" });

export interface KeyVersionSpec {
  /** The resource name for an existing Cloud KMS CryptoKeyVersion in the format `projects/* /locations/* /keyRings/* /cryptoKeys/* /cryptoKeyVersions/*`. This option enables full flexibility in the key's capabilities and properties. */
  cloudKmsKeyVersion?: string;
  /** The algorithm to use for creating a managed Cloud KMS key for a for a simplified experience. All managed keys will be have their ProtectionLevel as `HSM`. */
  algorithm?:
    | "SIGN_HASH_ALGORITHM_UNSPECIFIED"
    | "RSA_PSS_2048_SHA256"
    | "RSA_PSS_3072_SHA256"
    | "RSA_PSS_4096_SHA256"
    | "RSA_PKCS1_2048_SHA256"
    | "RSA_PKCS1_3072_SHA256"
    | "RSA_PKCS1_4096_SHA256"
    | "EC_P256_SHA256"
    | "EC_P384_SHA384"
    | (string & {});
}

export const KeyVersionSpec = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  cloudKmsKeyVersion: Schema.optional(Schema.String),
  algorithm: Schema.optional(Schema.String),
}).annotate({ identifier: "KeyVersionSpec" });

export interface AccessUrls {
  /** The URL where this CertificateAuthority's CA certificate is published. This will only be set for CAs that have been activated. */
  caCertificateAccessUrl?: string;
  /** The URLs where this CertificateAuthority's CRLs are published. This will only be set for CAs that have been activated. */
  crlAccessUrls?: ReadonlyArray<string>;
}

export const AccessUrls = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  caCertificateAccessUrl: Schema.optional(Schema.String),
  crlAccessUrls: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "AccessUrls" });

export interface CertificateAuthority {
  /** Immutable. The name of a Cloud Storage bucket where this CertificateAuthority will publish content, such as the CA certificate and CRLs. This must be a bucket name, without any prefixes (such as `gs://`) or suffixes (such as `.googleapis.com`). For example, to use a bucket named `my-bucket`, you would simply specify `my-bucket`. If not specified, a managed bucket will be created. */
  gcsBucket?: string;
  /** Required. Immutable. The config used to create a self-signed X.509 certificate or CSR. */
  config?: CertificateConfig;
  /** Optional. If this is a subordinate CertificateAuthority, this field will be set with the subordinate configuration, which describes its issuers. This may be updated, but this CertificateAuthority must continue to validate. */
  subordinateConfig?: SubordinateConfig;
  /** Optional. Labels with user-defined metadata. */
  labels?: Record<string, string>;
  /** Optional. User-defined URLs for CA certificate and CRLs. The service does not publish content to these URLs. It is up to the user to mirror content to these URLs. */
  userDefinedAccessUrls?: UserDefinedAccessUrls;
  /** Output only. The CaPool.Tier of the CaPool that includes this CertificateAuthority. */
  tier?: "TIER_UNSPECIFIED" | "ENTERPRISE" | "DEVOPS" | (string & {});
  /** Output only. This CertificateAuthority's certificate chain, including the current CertificateAuthority's certificate. Ordered such that the root issuer is the final element (consistent with RFC 5246). For a self-signed CA, this will only list the current CertificateAuthority's certificate. */
  pemCaCertificates?: ReadonlyArray<string>;
  /** Output only. Reserved for future use. */
  satisfiesPzs?: boolean;
  /** Output only. Reserved for future use. */
  satisfiesPzi?: boolean;
  /** Required. Immutable. The desired lifetime of the CA certificate. Used to create the "not_before_time" and "not_after_time" fields inside an X.509 certificate. */
  lifetime?: string;
  /** Output only. A structured description of this CertificateAuthority's CA certificate and its issuers. Ordered as self-to-root. */
  caCertificateDescriptions?: ReadonlyArray<CertificateDescription>;
  /** Required. Immutable. Used when issuing certificates for this CertificateAuthority. If this CertificateAuthority is a self-signed CertificateAuthority, this key is also used to sign the self-signed CA certificate. Otherwise, it is used to sign a CSR. */
  keySpec?: KeyVersionSpec;
  /** Output only. URLs for accessing content published by this CA, such as the CA certificate and CRLs. */
  accessUrls?: AccessUrls;
  /** Identifier. The resource name for this CertificateAuthority in the format `projects/* /locations/* /caPools/* /certificateAuthorities/*`. */
  name?: string;
  /** Output only. The time at which this CertificateAuthority was created. */
  createTime?: string;
  /** Output only. The State for this CertificateAuthority. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ENABLED"
    | "DISABLED"
    | "STAGED"
    | "AWAITING_USER_ACTIVATION"
    | "DELETED"
    | (string & {});
  /** Output only. The time at which this CertificateAuthority will be permanently purged, if it is in the DELETED state. */
  expireTime?: string;
  /** Required. Immutable. The Type of this CertificateAuthority. */
  type?: "TYPE_UNSPECIFIED" | "SELF_SIGNED" | "SUBORDINATE" | (string & {});
  /** Output only. The time at which this CertificateAuthority was last updated. */
  updateTime?: string;
  /** Output only. The time at which this CertificateAuthority was soft deleted, if it is in the DELETED state. */
  deleteTime?: string;
}

export const CertificateAuthority = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  gcsBucket: Schema.optional(Schema.String),
  config: Schema.optional(CertificateConfig),
  subordinateConfig: Schema.optional(SubordinateConfig),
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  userDefinedAccessUrls: Schema.optional(UserDefinedAccessUrls),
  tier: Schema.optional(Schema.String),
  pemCaCertificates: Schema.optional(Schema.Array(Schema.String)),
  satisfiesPzs: Schema.optional(Schema.Boolean),
  satisfiesPzi: Schema.optional(Schema.Boolean),
  lifetime: Schema.optional(Schema.String),
  caCertificateDescriptions: Schema.optional(
    Schema.Array(CertificateDescription),
  ),
  keySpec: Schema.optional(KeyVersionSpec),
  accessUrls: Schema.optional(AccessUrls),
  name: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
  expireTime: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  updateTime: Schema.optional(Schema.String),
  deleteTime: Schema.optional(Schema.String),
}).annotate({ identifier: "CertificateAuthority" });

export interface AuditLogConfig {
  /** The log type that this config enables. */
  logType?:
    | "LOG_TYPE_UNSPECIFIED"
    | "ADMIN_READ"
    | "DATA_WRITE"
    | "DATA_READ"
    | (string & {});
  /** Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members. */
  exemptedMembers?: ReadonlyArray<string>;
}

export const AuditLogConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  logType: Schema.optional(Schema.String),
  exemptedMembers: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "AuditLogConfig" });

export interface RevokeCertificateRequest {
  /** Required. The RevocationReason for revoking this certificate. */
  reason?:
    | "REVOCATION_REASON_UNSPECIFIED"
    | "KEY_COMPROMISE"
    | "CERTIFICATE_AUTHORITY_COMPROMISE"
    | "AFFILIATION_CHANGED"
    | "SUPERSEDED"
    | "CESSATION_OF_OPERATION"
    | "CERTIFICATE_HOLD"
    | "PRIVILEGE_WITHDRAWN"
    | "ATTRIBUTE_AUTHORITY_COMPROMISE"
    | (string & {});
  /** Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const RevokeCertificateRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reason: Schema.optional(Schema.String),
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "RevokeCertificateRequest" });

export interface RsaKeyType {
  /** Optional. The maximum allowed RSA modulus size (inclusive), in bits. If this is not set, or if set to zero, the service will not enforce an explicit upper bound on RSA modulus sizes. */
  maxModulusSize?: string;
  /** Optional. The minimum allowed RSA modulus size (inclusive), in bits. If this is not set, or if set to zero, the service-level min RSA modulus size will continue to apply. */
  minModulusSize?: string;
}

export const RsaKeyType = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  maxModulusSize: Schema.optional(Schema.String),
  minModulusSize: Schema.optional(Schema.String),
}).annotate({ identifier: "RsaKeyType" });

export interface AllowedKeyType {
  /** Represents an allowed Elliptic Curve key type. */
  ellipticCurve?: EcKeyType;
  /** Represents an allowed RSA key type. */
  rsa?: RsaKeyType;
}

export const AllowedKeyType = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ellipticCurve: Schema.optional(EcKeyType),
  rsa: Schema.optional(RsaKeyType),
}).annotate({ identifier: "AllowedKeyType" });

export interface OperationMetadata {
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have google.longrunning.Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
}

export const OperationMetadata = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  requestedCancellation: Schema.optional(Schema.Boolean),
  endTime: Schema.optional(Schema.String),
  verb: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
  target: Schema.optional(Schema.String),
  statusMessage: Schema.optional(Schema.String),
  apiVersion: Schema.optional(Schema.String),
}).annotate({ identifier: "OperationMetadata" });

export interface IssuanceModes {
  /** Optional. When true, allows callers to create Certificates by specifying a CSR. */
  allowCsrBasedIssuance?: boolean;
  /** Optional. When true, allows callers to create Certificates by specifying a CertificateConfig. */
  allowConfigBasedIssuance?: boolean;
}

export const IssuanceModes = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  allowCsrBasedIssuance: Schema.optional(Schema.Boolean),
  allowConfigBasedIssuance: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "IssuanceModes" });

export interface EncryptionSpec {
  /** The resource name for a Cloud KMS key in the format `projects/* /locations/* /keyRings/* /cryptoKeys/*`. */
  cloudKmsKey?: string;
}

export const EncryptionSpec = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  cloudKmsKey: Schema.optional(Schema.String),
}).annotate({ identifier: "EncryptionSpec" });

export interface RevokedCertificate {
  /** The resource name for the Certificate in the format `projects/* /locations/* /caPools/* /certificates/*`. */
  certificate?: string;
  /** The serial number of the Certificate. */
  hexSerialNumber?: string;
  /** The reason the Certificate was revoked. */
  revocationReason?:
    | "REVOCATION_REASON_UNSPECIFIED"
    | "KEY_COMPROMISE"
    | "CERTIFICATE_AUTHORITY_COMPROMISE"
    | "AFFILIATION_CHANGED"
    | "SUPERSEDED"
    | "CESSATION_OF_OPERATION"
    | "CERTIFICATE_HOLD"
    | "PRIVILEGE_WITHDRAWN"
    | "ATTRIBUTE_AUTHORITY_COMPROMISE"
    | (string & {});
}

export const RevokedCertificate = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  certificate: Schema.optional(Schema.String),
  hexSerialNumber: Schema.optional(Schema.String),
  revocationReason: Schema.optional(Schema.String),
}).annotate({ identifier: "RevokedCertificate" });

export interface CertificateRevocationList {
  /** Output only. The CRL sequence number that appears in pem_crl. */
  sequenceNumber?: string;
  /** Output only. The time at which this CertificateRevocationList was updated. */
  updateTime?: string;
  /** Output only. The revision ID of this CertificateRevocationList. A new revision is committed whenever a new CRL is published. The format is an 8-character hexadecimal string. */
  revisionId?: string;
  /** Output only. The State for this CertificateRevocationList. */
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "SUPERSEDED" | (string & {});
  /** Identifier. The resource name for this CertificateRevocationList in the format `projects/* /locations/* /caPools/*certificateAuthorities/* / certificateRevocationLists/*`. */
  name?: string;
  /** Output only. The time at which this CertificateRevocationList was created. */
  createTime?: string;
  /** Optional. Labels with user-defined metadata. */
  labels?: Record<string, string>;
  /** Output only. The location where 'pem_crl' can be accessed. */
  accessUrl?: string;
  /** Output only. The PEM-encoded X.509 CRL. */
  pemCrl?: string;
  /** Output only. The revoked serial numbers that appear in pem_crl. */
  revokedCertificates?: ReadonlyArray<RevokedCertificate>;
}

export const CertificateRevocationList =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sequenceNumber: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    revisionId: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    accessUrl: Schema.optional(Schema.String),
    pemCrl: Schema.optional(Schema.String),
    revokedCertificates: Schema.optional(Schema.Array(RevokedCertificate)),
  }).annotate({ identifier: "CertificateRevocationList" });

export interface ListCertificateRevocationListsResponse {
  /** The list of CertificateRevocationLists. */
  certificateRevocationLists?: ReadonlyArray<CertificateRevocationList>;
  /** A token to retrieve next page of results. Pass this value in ListCertificateRevocationListsRequest.page_token to retrieve the next page of results. */
  nextPageToken?: string;
  /** A list of locations (e.g. "us-west1") that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListCertificateRevocationListsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    certificateRevocationLists: Schema.optional(
      Schema.Array(CertificateRevocationList),
    ),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListCertificateRevocationListsResponse" });

export interface CertificateExtensionConstraints {
  /** Optional. A set of named X.509 extensions. Will be combined with additional_extensions to determine the full set of X.509 extensions. */
  knownExtensions?: ReadonlyArray<
    | "KNOWN_CERTIFICATE_EXTENSION_UNSPECIFIED"
    | "BASE_KEY_USAGE"
    | "EXTENDED_KEY_USAGE"
    | "CA_OPTIONS"
    | "POLICY_IDS"
    | "AIA_OCSP_SERVERS"
    | "NAME_CONSTRAINTS"
    | (string & {})
  >;
  /** Optional. A set of ObjectIds identifying custom X.509 extensions. Will be combined with known_extensions to determine the full set of X.509 extensions. */
  additionalExtensions?: ReadonlyArray<ObjectId>;
}

export const CertificateExtensionConstraints =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    knownExtensions: Schema.optional(Schema.Array(Schema.String)),
    additionalExtensions: Schema.optional(Schema.Array(ObjectId)),
  }).annotate({ identifier: "CertificateExtensionConstraints" });

export interface Status {
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
}

export const Status = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  message: Schema.optional(Schema.String),
  details: Schema.optional(
    Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
  ),
  code: Schema.optional(Schema.Number),
}).annotate({ identifier: "Status" });

export interface FetchCaCertsRequest {
  /** Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const FetchCaCertsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  requestId: Schema.optional(Schema.String),
}).annotate({ identifier: "FetchCaCertsRequest" });

export interface Expr {
  /** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
  description?: string;
  /** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
  location?: string;
  /** Textual representation of an expression in Common Expression Language syntax. */
  expression?: string;
  /** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
  title?: string;
}

export const Expr = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  description: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  expression: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
}).annotate({ identifier: "Expr" });

export interface CertificateIdentityConstraints {
  /** Required. If this is true, the SubjectAltNames extension may be copied from a certificate request into the signed certificate. Otherwise, the requested SubjectAltNames will be discarded. */
  allowSubjectAltNamesPassthrough?: boolean;
  /** Optional. A CEL expression that may be used to validate the resolved X.509 Subject and/or Subject Alternative Name before a certificate is signed. To see the full allowed syntax and some examples, see https://cloud.google.com/certificate-authority-service/docs/using-cel */
  celExpression?: Expr;
  /** Required. If this is true, the Subject field may be copied from a certificate request into the signed certificate. Otherwise, the requested Subject will be discarded. */
  allowSubjectPassthrough?: boolean;
}

export const CertificateIdentityConstraints =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowSubjectAltNamesPassthrough: Schema.optional(Schema.Boolean),
    celExpression: Schema.optional(Expr),
    allowSubjectPassthrough: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "CertificateIdentityConstraints" });

export interface CertificateTemplate {
  /** Identifier. The resource name for this CertificateTemplate in the format `projects/* /locations/* /certificateTemplates/*`. */
  name?: string;
  /** Optional. Describes constraints on identities that may be appear in Certificates issued using this template. If this is omitted, then this template will not add restrictions on a certificate's identity. */
  identityConstraints?: CertificateIdentityConstraints;
  /** Output only. The time at which this CertificateTemplate was created. */
  createTime?: string;
  /** Optional. Labels with user-defined metadata. */
  labels?: Record<string, string>;
  /** Optional. The maximum lifetime allowed for issued Certificates that use this template. If the issuing CaPool resource's IssuancePolicy specifies a maximum_lifetime the minimum of the two durations will be the maximum lifetime for issued Certificates. Note that if the issuing CertificateAuthority expires before a Certificate's requested maximum_lifetime, the effective lifetime will be explicitly truncated to match it. */
  maximumLifetime?: string;
  /** Optional. Describes the set of X.509 extensions that may appear in a Certificate issued using this CertificateTemplate. If a certificate request sets extensions that don't appear in the passthrough_extensions, those extensions will be dropped. If the issuing CaPool's IssuancePolicy defines baseline_values that don't appear here, the certificate issuance request will fail. If this is omitted, then this template will not add restrictions on a certificate's X.509 extensions. These constraints do not apply to X.509 extensions set in this CertificateTemplate's predefined_values. */
  passthroughExtensions?: CertificateExtensionConstraints;
  /** Output only. The time at which this CertificateTemplate was updated. */
  updateTime?: string;
  /** Optional. A set of X.509 values that will be applied to all issued certificates that use this template. If the certificate request includes conflicting values for the same properties, they will be overwritten by the values defined here. If the issuing CaPool's IssuancePolicy defines conflicting baseline_values for the same properties, the certificate issuance request will fail. */
  predefinedValues?: X509Parameters;
  /** Optional. A human-readable description of scenarios this template is intended for. */
  description?: string;
}

export const CertificateTemplate = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  identityConstraints: Schema.optional(CertificateIdentityConstraints),
  createTime: Schema.optional(Schema.String),
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  maximumLifetime: Schema.optional(Schema.String),
  passthroughExtensions: Schema.optional(CertificateExtensionConstraints),
  updateTime: Schema.optional(Schema.String),
  predefinedValues: Schema.optional(X509Parameters),
  description: Schema.optional(Schema.String),
}).annotate({ identifier: "CertificateTemplate" });

export interface ListCertificateTemplatesResponse {
  /** A list of locations (e.g. "us-west1") that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token to retrieve next page of results. Pass this value in ListCertificateTemplatesRequest.page_token to retrieve the next page of results. */
  nextPageToken?: string;
  /** The list of CertificateTemplates. */
  certificateTemplates?: ReadonlyArray<CertificateTemplate>;
}

export const ListCertificateTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
    certificateTemplates: Schema.optional(Schema.Array(CertificateTemplate)),
  }).annotate({ identifier: "ListCertificateTemplatesResponse" });

export interface Operation {
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
}

export const Operation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  name: Schema.optional(Schema.String),
  done: Schema.optional(Schema.Boolean),
  error: Schema.optional(Status),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
}).annotate({ identifier: "Operation" });

export interface DisableCertificateAuthorityRequest {
  /** Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. This field allows this CA to be disabled even if it's being depended on by another resource. However, doing so may result in unintended and unrecoverable effects on any dependent resources since the CA will no longer be able to issue certificates. */
  ignoreDependentResources?: boolean;
}

export const DisableCertificateAuthorityRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String),
    ignoreDependentResources: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DisableCertificateAuthorityRequest" });

export interface IssuancePolicy {
  /** Optional. If set, all certificates issued from this CaPool will be backdated by this duration. The 'not_before_time' will be the issuance time minus this backdate_duration, and the 'not_after_time' will be adjusted to preserve the requested lifetime. The maximum duration that a certificate can be backdated with these options is 48 hours in the past. This option cannot be set if allow_requester_specified_not_before_time is set. */
  backdateDuration?: string;
  /** Optional. Describes constraints on identities that may appear in Certificates issued through this CaPool. If this is omitted, then this CaPool will not add restrictions on a certificate's identity. */
  identityConstraints?: CertificateIdentityConstraints;
  /** Optional. The maximum lifetime allowed for issued Certificates. Note that if the issuing CertificateAuthority expires before a Certificate resource's requested maximum_lifetime, the effective lifetime will be explicitly truncated to match it. */
  maximumLifetime?: string;
  /** Optional. Describes the set of X.509 extensions that may appear in a Certificate issued through this CaPool. If a certificate request sets extensions that don't appear in the passthrough_extensions, those extensions will be dropped. If a certificate request uses a CertificateTemplate with predefined_values that don't appear here, the certificate issuance request will fail. If this is omitted, then this CaPool will not add restrictions on a certificate's X.509 extensions. These constraints do not apply to X.509 extensions set in this CaPool's baseline_values. */
  passthroughExtensions?: CertificateExtensionConstraints;
  /** Optional. If specified, then only methods allowed in the IssuanceModes may be used to issue Certificates. */
  allowedIssuanceModes?: IssuanceModes;
  /** Optional. A set of X.509 values that will be applied to all certificates issued through this CaPool. If a certificate request includes conflicting values for the same properties, they will be overwritten by the values defined here. If a certificate request uses a CertificateTemplate that defines conflicting predefined_values for the same properties, the certificate issuance request will fail. */
  baselineValues?: X509Parameters;
  /** Optional. If any AllowedKeyType is specified, then the certificate request's public key must match one of the key types listed here. Otherwise, any key may be used. */
  allowedKeyTypes?: ReadonlyArray<AllowedKeyType>;
}

export const IssuancePolicy = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  backdateDuration: Schema.optional(Schema.String),
  identityConstraints: Schema.optional(CertificateIdentityConstraints),
  maximumLifetime: Schema.optional(Schema.String),
  passthroughExtensions: Schema.optional(CertificateExtensionConstraints),
  allowedIssuanceModes: Schema.optional(IssuanceModes),
  baselineValues: Schema.optional(X509Parameters),
  allowedKeyTypes: Schema.optional(Schema.Array(AllowedKeyType)),
}).annotate({ identifier: "IssuancePolicy" });

export interface CancelOperationRequest {}

export const CancelOperationRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "CancelOperationRequest" });

export interface PublishingOptions {
  /** Optional. When true, publishes each CertificateAuthority's CA certificate and includes its URL in the "Authority Information Access" X.509 extension in all issued Certificates. If this is false, the CA certificate will not be published and the corresponding X.509 extension will not be written in issued certificates. */
  publishCaCert?: boolean;
  /** Optional. When true, publishes each CertificateAuthority's CRL and includes its URL in the "CRL Distribution Points" X.509 extension in all issued Certificates. If this is false, CRLs will not be published and the corresponding X.509 extension will not be written in issued certificates. CRLs will expire 7 days from their creation. However, we will rebuild daily. CRLs are also rebuilt shortly after a certificate is revoked. */
  publishCrl?: boolean;
  /** Optional. Specifies the encoding format of each CertificateAuthority resource's CA certificate and CRLs. If this is omitted, CA certificates and CRLs will be published in PEM. */
  encodingFormat?:
    | "ENCODING_FORMAT_UNSPECIFIED"
    | "PEM"
    | "DER"
    | (string & {});
}

export const PublishingOptions = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  publishCaCert: Schema.optional(Schema.Boolean),
  publishCrl: Schema.optional(Schema.Boolean),
  encodingFormat: Schema.optional(Schema.String),
}).annotate({ identifier: "PublishingOptions" });

export interface CaPool {
  /** Optional. The PublishingOptions to follow when issuing Certificates from any CertificateAuthority in this CaPool. */
  publishingOptions?: PublishingOptions;
  /** Required. Immutable. The Tier of this CaPool. */
  tier?: "TIER_UNSPECIFIED" | "ENTERPRISE" | "DEVOPS" | (string & {});
  /** Identifier. The resource name for this CaPool in the format `projects/* /locations/* /caPools/*`. */
  name?: string;
  /** Optional. When EncryptionSpec is provided, the Subject, SubjectAltNames, and the PEM-encoded certificate fields will be encrypted at rest. */
  encryptionSpec?: EncryptionSpec;
  /** Optional. The IssuancePolicy to control how Certificates will be issued from this CaPool. */
  issuancePolicy?: IssuancePolicy;
  /** Optional. Labels with user-defined metadata. */
  labels?: Record<string, string>;
}

export const CaPool = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  publishingOptions: Schema.optional(PublishingOptions),
  tier: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  encryptionSpec: Schema.optional(EncryptionSpec),
  issuancePolicy: Schema.optional(IssuancePolicy),
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).annotate({ identifier: "CaPool" });

export interface ListCaPoolsResponse {
  /** The list of CaPools. */
  caPools?: ReadonlyArray<CaPool>;
  /** A list of locations (e.g. "us-west1") that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token to retrieve next page of results. Pass this value in ListCertificateAuthoritiesRequest.page_token to retrieve the next page of results. */
  nextPageToken?: string;
}

export const ListCaPoolsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  caPools: Schema.optional(Schema.Array(CaPool)),
  unreachable: Schema.optional(Schema.Array(Schema.String)),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "ListCaPoolsResponse" });

export interface FetchCertificateAuthorityCsrResponse {
  /** Output only. The PEM-encoded signed certificate signing request (CSR). */
  pemCsr?: string;
}

export const FetchCertificateAuthorityCsrResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pemCsr: Schema.optional(Schema.String),
  }).annotate({ identifier: "FetchCertificateAuthorityCsrResponse" });

export interface TestIamPermissionsRequest {
  /** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsRequest" });

export interface CertChain {
  /** The certificates that form the CA chain, from leaf to root order. */
  certificates?: ReadonlyArray<string>;
}

export const CertChain = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  certificates: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "CertChain" });

export interface FetchCaCertsResponse {
  /** The PEM encoded CA certificate chains of all certificate authorities in this CaPool in the ENABLED, DISABLED, or STAGED states. */
  caCerts?: ReadonlyArray<CertChain>;
}

export const FetchCaCertsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  caCerts: Schema.optional(Schema.Array(CertChain)),
}).annotate({ identifier: "FetchCaCertsResponse" });

export interface Binding {
  /** The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  condition?: Expr;
  /** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`. */
  members?: ReadonlyArray<string>;
  /** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles). */
  role?: string;
}

export const Binding = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  condition: Schema.optional(Expr),
  members: Schema.optional(Schema.Array(Schema.String)),
  role: Schema.optional(Schema.String),
}).annotate({ identifier: "Binding" });

export interface AuditConfig {
  /** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
  service?: string;
  /** The configuration for logging of each type of permission. */
  auditLogConfigs?: ReadonlyArray<AuditLogConfig>;
}

export const AuditConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  service: Schema.optional(Schema.String),
  auditLogConfigs: Schema.optional(Schema.Array(AuditLogConfig)),
}).annotate({ identifier: "AuditConfig" });

export interface Policy {
  /** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
  etag?: string;
  /** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  version?: number;
  /** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
  bindings?: ReadonlyArray<Binding>;
  /** Specifies cloud audit logging configuration for this policy. */
  auditConfigs?: ReadonlyArray<AuditConfig>;
}

export const Policy = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  etag: Schema.optional(Schema.String),
  version: Schema.optional(Schema.Number),
  bindings: Schema.optional(Schema.Array(Binding)),
  auditConfigs: Schema.optional(Schema.Array(AuditConfig)),
}).annotate({ identifier: "Policy" });

export interface Empty {}

export const Empty = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
  identifier: "Empty",
});

export interface ListOperationsResponse {
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
}

export const ListOperationsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    operations: Schema.optional(Schema.Array(Operation)),
  },
).annotate({ identifier: "ListOperationsResponse" });

export interface Location {
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
}

export const Location = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  name: Schema.optional(Schema.String),
  locationId: Schema.optional(Schema.String),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  displayName: Schema.optional(Schema.String),
}).annotate({ identifier: "Location" });

export interface ListLocationsResponse {
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** A list of locations that matches the specified filter in the request. */
  locations?: ReadonlyArray<Location>;
}

export const ListLocationsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextPageToken: Schema.optional(Schema.String),
  locations: Schema.optional(Schema.Array(Location)),
}).annotate({ identifier: "ListLocationsResponse" });

export interface TestIamPermissionsResponse {
  /** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsResponse" });

export interface UndeleteCertificateAuthorityRequest {
  /** Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const UndeleteCertificateAuthorityRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "UndeleteCertificateAuthorityRequest" });

export interface ListCertificatesResponse {
  /** A list of locations (e.g. "us-west1") that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token to retrieve next page of results. Pass this value in ListCertificatesRequest.page_token to retrieve the next page of results. */
  nextPageToken?: string;
  /** The list of Certificates. */
  certificates?: ReadonlyArray<Certificate>;
}

export const ListCertificatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
    certificates: Schema.optional(Schema.Array(Certificate)),
  }).annotate({ identifier: "ListCertificatesResponse" });

export interface SetIamPolicyRequest {
  /** REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them. */
  policy?: Policy;
  /** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
  updateMask?: string;
}

export const SetIamPolicyRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  policy: Schema.optional(Policy),
  updateMask: Schema.optional(Schema.String),
}).annotate({ identifier: "SetIamPolicyRequest" });

export interface ListCertificateAuthoritiesResponse {
  /** The list of CertificateAuthorities. */
  certificateAuthorities?: ReadonlyArray<CertificateAuthority>;
  /** A token to retrieve next page of results. Pass this value in ListCertificateAuthoritiesRequest.page_token to retrieve the next page of results. */
  nextPageToken?: string;
  /** A list of locations (e.g. "us-west1") that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListCertificateAuthoritiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    certificateAuthorities: Schema.optional(Schema.Array(CertificateAuthority)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListCertificateAuthoritiesResponse" });

export interface ActivateCertificateAuthorityRequest {
  /** Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The signed CA certificate issued from FetchCertificateAuthorityCsrResponse.pem_csr. */
  pemCaCertificate?: string;
  /** Required. Must include information about the issuer of 'pem_ca_certificate', and any further issuers until the self-signed CA. */
  subordinateConfig?: SubordinateConfig;
}

export const ActivateCertificateAuthorityRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String),
    pemCaCertificate: Schema.optional(Schema.String),
    subordinateConfig: Schema.optional(SubordinateConfig),
  }).annotate({ identifier: "ActivateCertificateAuthorityRequest" });

// ==========================================================================
// Operations
// ==========================================================================

export interface ListProjectsLocationsRequest {
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}/locations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRequest>;

export type ListProjectsLocationsResponse = ListLocationsResponse;
export const ListProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListLocationsResponse;

export type ListProjectsLocationsError = DefaultErrors;

/** Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the [ListLocationsRequest.name] field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version. */
export const listProjectsLocations: API.PaginatedOperationMethod<
  ListProjectsLocationsRequest,
  ListProjectsLocationsResponse,
  ListProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRequest,
  output: ListProjectsLocationsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsRequest {
  /** Resource name for the location. */
  name: string;
}

export const GetProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRequest>;

export type GetProjectsLocationsResponse = Location;
export const GetProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Location;

export type GetProjectsLocationsError = DefaultErrors;

/** Gets information about a location. */
export const getProjectsLocations: API.OperationMethod<
  GetProjectsLocationsRequest,
  GetProjectsLocationsResponse,
  GetProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRequest,
  output: GetProjectsLocationsResponse,
  errors: [],
}));

export interface DeleteProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsOperationsRequest>;

export type DeleteProjectsLocationsOperationsResponse = Empty;
export const DeleteProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsOperationsError = DefaultErrors;

/** Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. */
export const deleteProjectsLocationsOperations: API.OperationMethod<
  DeleteProjectsLocationsOperationsRequest,
  DeleteProjectsLocationsOperationsResponse,
  DeleteProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsOperationsRequest,
  output: DeleteProjectsLocationsOperationsResponse,
  errors: [],
}));

export interface GetProjectsLocationsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsOperationsRequest>;

export type GetProjectsLocationsOperationsResponse = Operation;
export const GetProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GetProjectsLocationsOperationsError = DefaultErrors;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getProjectsLocationsOperations: API.OperationMethod<
  GetProjectsLocationsOperationsRequest,
  GetProjectsLocationsOperationsResponse,
  GetProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsOperationsRequest,
  output: GetProjectsLocationsOperationsResponse,
  errors: [],
}));

export interface CancelProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
  /** Request body */
  body?: CancelOperationRequest;
}

export const CancelProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelOperationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsLocationsOperationsRequest>;

export type CancelProjectsLocationsOperationsResponse = Empty;
export const CancelProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type CancelProjectsLocationsOperationsError = DefaultErrors;

/** Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
export const cancelProjectsLocationsOperations: API.OperationMethod<
  CancelProjectsLocationsOperationsRequest,
  CancelProjectsLocationsOperationsResponse,
  CancelProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsOperationsRequest,
  output: CancelProjectsLocationsOperationsResponse,
  errors: [],
}));

export interface ListProjectsLocationsOperationsRequest {
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list page size. */
  pageSize?: number;
  /** The standard list page token. */
  pageToken?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list filter. */
  filter?: string;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}/operations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsOperationsRequest>;

export type ListProjectsLocationsOperationsResponse = ListOperationsResponse;
export const ListProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListOperationsResponse;

export type ListProjectsLocationsOperationsError = DefaultErrors;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listProjectsLocationsOperations: API.PaginatedOperationMethod<
  ListProjectsLocationsOperationsRequest,
  ListProjectsLocationsOperationsResponse,
  ListProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsOperationsRequest,
  output: ListProjectsLocationsOperationsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsCertificateTemplatesRequest {
  /** Optional. Only include resources that match the filter in the response. */
  filter?: string;
  /** Optional. Limit on the number of CertificateTemplates to include in the response. Further CertificateTemplates can subsequently be obtained by including the ListCertificateTemplatesResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Pagination token, returned earlier via ListCertificateTemplatesResponse.next_page_token. */
  pageToken?: string;
  /** Required. The resource name of the location associated with the CertificateTemplates, in the format `projects/* /locations/*`. */
  parent: string;
  /** Optional. Specify how the results should be sorted. */
  orderBy?: string;
}

export const ListProjectsLocationsCertificateTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/certificateTemplates" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsCertificateTemplatesRequest>;

export type ListProjectsLocationsCertificateTemplatesResponse =
  ListCertificateTemplatesResponse;
export const ListProjectsLocationsCertificateTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListCertificateTemplatesResponse;

export type ListProjectsLocationsCertificateTemplatesError = DefaultErrors;

/** Lists CertificateTemplates. */
export const listProjectsLocationsCertificateTemplates: API.PaginatedOperationMethod<
  ListProjectsLocationsCertificateTemplatesRequest,
  ListProjectsLocationsCertificateTemplatesResponse,
  ListProjectsLocationsCertificateTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsCertificateTemplatesRequest,
  output: ListProjectsLocationsCertificateTemplatesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetIamPolicyProjectsLocationsCertificateTemplatesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsCertificateTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsCertificateTemplatesRequest>;

export type GetIamPolicyProjectsLocationsCertificateTemplatesResponse = Policy;
export const GetIamPolicyProjectsLocationsCertificateTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsCertificateTemplatesError =
  DefaultErrors;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsCertificateTemplates: API.OperationMethod<
  GetIamPolicyProjectsLocationsCertificateTemplatesRequest,
  GetIamPolicyProjectsLocationsCertificateTemplatesResponse,
  GetIamPolicyProjectsLocationsCertificateTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsCertificateTemplatesRequest,
  output: GetIamPolicyProjectsLocationsCertificateTemplatesResponse,
  errors: [],
}));

export interface DeleteProjectsLocationsCertificateTemplatesRequest {
  /** Required. The resource name for this CertificateTemplate in the format `projects/* /locations/* /certificateTemplates/*`. */
  name: string;
  /** Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsCertificateTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsCertificateTemplatesRequest>;

export type DeleteProjectsLocationsCertificateTemplatesResponse = Operation;
export const DeleteProjectsLocationsCertificateTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsCertificateTemplatesError = DefaultErrors;

/** DeleteCertificateTemplate deletes a CertificateTemplate. */
export const deleteProjectsLocationsCertificateTemplates: API.OperationMethod<
  DeleteProjectsLocationsCertificateTemplatesRequest,
  DeleteProjectsLocationsCertificateTemplatesResponse,
  DeleteProjectsLocationsCertificateTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsCertificateTemplatesRequest,
  output: DeleteProjectsLocationsCertificateTemplatesResponse,
  errors: [],
}));

export interface GetProjectsLocationsCertificateTemplatesRequest {
  /** Required. The name of the CertificateTemplate to get. */
  name: string;
}

export const GetProjectsLocationsCertificateTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsCertificateTemplatesRequest>;

export type GetProjectsLocationsCertificateTemplatesResponse =
  CertificateTemplate;
export const GetProjectsLocationsCertificateTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ CertificateTemplate;

export type GetProjectsLocationsCertificateTemplatesError = DefaultErrors;

/** Returns a CertificateTemplate. */
export const getProjectsLocationsCertificateTemplates: API.OperationMethod<
  GetProjectsLocationsCertificateTemplatesRequest,
  GetProjectsLocationsCertificateTemplatesResponse,
  GetProjectsLocationsCertificateTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsCertificateTemplatesRequest,
  output: GetProjectsLocationsCertificateTemplatesResponse,
  errors: [],
}));

export interface CreateProjectsLocationsCertificateTemplatesRequest {
  /** Required. The resource name of the location associated with the CertificateTemplate, in the format `projects/* /locations/*`. */
  parent: string;
  /** Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. It must be unique within a location and match the regular expression `[a-zA-Z0-9_-]{1,63}` */
  certificateTemplateId?: string;
  /** Request body */
  body?: CertificateTemplate;
}

export const CreateProjectsLocationsCertificateTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    certificateTemplateId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("certificateTemplateId"),
    ),
    body: Schema.optional(CertificateTemplate).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{parent}/certificateTemplates",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsCertificateTemplatesRequest>;

export type CreateProjectsLocationsCertificateTemplatesResponse = Operation;
export const CreateProjectsLocationsCertificateTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsCertificateTemplatesError = DefaultErrors;

/** Create a new CertificateTemplate in a given Project and Location. */
export const createProjectsLocationsCertificateTemplates: API.OperationMethod<
  CreateProjectsLocationsCertificateTemplatesRequest,
  CreateProjectsLocationsCertificateTemplatesResponse,
  CreateProjectsLocationsCertificateTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsCertificateTemplatesRequest,
  output: CreateProjectsLocationsCertificateTemplatesResponse,
  errors: [],
}));

export interface PatchProjectsLocationsCertificateTemplatesRequest {
  /** Identifier. The resource name for this CertificateTemplate in the format `projects/* /locations/* /certificateTemplates/*`. */
  name: string;
  /** Required. A list of fields to be updated in this request. */
  updateMask?: string;
  /** Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: CertificateTemplate;
}

export const PatchProjectsLocationsCertificateTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(CertificateTemplate).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsCertificateTemplatesRequest>;

export type PatchProjectsLocationsCertificateTemplatesResponse = Operation;
export const PatchProjectsLocationsCertificateTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsCertificateTemplatesError = DefaultErrors;

/** Update a CertificateTemplate. */
export const patchProjectsLocationsCertificateTemplates: API.OperationMethod<
  PatchProjectsLocationsCertificateTemplatesRequest,
  PatchProjectsLocationsCertificateTemplatesResponse,
  PatchProjectsLocationsCertificateTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsCertificateTemplatesRequest,
  output: PatchProjectsLocationsCertificateTemplatesResponse,
  errors: [],
}));

export interface SetIamPolicyProjectsLocationsCertificateTemplatesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsCertificateTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsCertificateTemplatesRequest>;

export type SetIamPolicyProjectsLocationsCertificateTemplatesResponse = Policy;
export const SetIamPolicyProjectsLocationsCertificateTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsCertificateTemplatesError =
  DefaultErrors;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsCertificateTemplates: API.OperationMethod<
  SetIamPolicyProjectsLocationsCertificateTemplatesRequest,
  SetIamPolicyProjectsLocationsCertificateTemplatesResponse,
  SetIamPolicyProjectsLocationsCertificateTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsCertificateTemplatesRequest,
  output: SetIamPolicyProjectsLocationsCertificateTemplatesResponse,
  errors: [],
}));

export interface TestIamPermissionsProjectsLocationsCertificateTemplatesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsCertificateTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsCertificateTemplatesRequest>;

export type TestIamPermissionsProjectsLocationsCertificateTemplatesResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsCertificateTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsCertificateTemplatesError =
  DefaultErrors;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsCertificateTemplates: API.OperationMethod<
  TestIamPermissionsProjectsLocationsCertificateTemplatesRequest,
  TestIamPermissionsProjectsLocationsCertificateTemplatesResponse,
  TestIamPermissionsProjectsLocationsCertificateTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsCertificateTemplatesRequest,
  output: TestIamPermissionsProjectsLocationsCertificateTemplatesResponse,
  errors: [],
}));

export interface GetProjectsLocationsCaPoolsRequest {
  /** Required. The name of the CaPool to get. */
  name: string;
}

export const GetProjectsLocationsCaPoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsCaPoolsRequest>;

export type GetProjectsLocationsCaPoolsResponse = CaPool;
export const GetProjectsLocationsCaPoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CaPool;

export type GetProjectsLocationsCaPoolsError = DefaultErrors;

/** Returns a CaPool. */
export const getProjectsLocationsCaPools: API.OperationMethod<
  GetProjectsLocationsCaPoolsRequest,
  GetProjectsLocationsCaPoolsResponse,
  GetProjectsLocationsCaPoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsCaPoolsRequest,
  output: GetProjectsLocationsCaPoolsResponse,
  errors: [],
}));

export interface GetIamPolicyProjectsLocationsCaPoolsRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsCaPoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsCaPoolsRequest>;

export type GetIamPolicyProjectsLocationsCaPoolsResponse = Policy;
export const GetIamPolicyProjectsLocationsCaPoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsCaPoolsError = DefaultErrors;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsCaPools: API.OperationMethod<
  GetIamPolicyProjectsLocationsCaPoolsRequest,
  GetIamPolicyProjectsLocationsCaPoolsResponse,
  GetIamPolicyProjectsLocationsCaPoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsCaPoolsRequest,
  output: GetIamPolicyProjectsLocationsCaPoolsResponse,
  errors: [],
}));

export interface FetchCaCertsProjectsLocationsCaPoolsRequest {
  /** Required. The resource name for the CaPool in the format `projects/* /locations/* /caPools/*`. */
  caPool: string;
  /** Request body */
  body?: FetchCaCertsRequest;
}

export const FetchCaCertsProjectsLocationsCaPoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    caPool: Schema.String.pipe(T.HttpPath("caPool")),
    body: Schema.optional(FetchCaCertsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{caPool}:fetchCaCerts", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<FetchCaCertsProjectsLocationsCaPoolsRequest>;

export type FetchCaCertsProjectsLocationsCaPoolsResponse = FetchCaCertsResponse;
export const FetchCaCertsProjectsLocationsCaPoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FetchCaCertsResponse;

export type FetchCaCertsProjectsLocationsCaPoolsError = DefaultErrors;

/** FetchCaCerts returns the current trust anchor for the CaPool. This will include CA certificate chains for all certificate authorities in the ENABLED, DISABLED, or STAGED states. */
export const fetchCaCertsProjectsLocationsCaPools: API.OperationMethod<
  FetchCaCertsProjectsLocationsCaPoolsRequest,
  FetchCaCertsProjectsLocationsCaPoolsResponse,
  FetchCaCertsProjectsLocationsCaPoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FetchCaCertsProjectsLocationsCaPoolsRequest,
  output: FetchCaCertsProjectsLocationsCaPoolsResponse,
  errors: [],
}));

export interface CreateProjectsLocationsCaPoolsRequest {
  /** Required. It must be unique within a location and match the regular expression `[a-zA-Z0-9_-]{1,63}` */
  caPoolId?: string;
  /** Required. The resource name of the location associated with the CaPool, in the format `projects/* /locations/*`. */
  parent: string;
  /** Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: CaPool;
}

export const CreateProjectsLocationsCaPoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    caPoolId: Schema.optional(Schema.String).pipe(T.HttpQuery("caPoolId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(CaPool).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{parent}/caPools", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsCaPoolsRequest>;

export type CreateProjectsLocationsCaPoolsResponse = Operation;
export const CreateProjectsLocationsCaPoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsCaPoolsError = DefaultErrors;

/** Create a CaPool. */
export const createProjectsLocationsCaPools: API.OperationMethod<
  CreateProjectsLocationsCaPoolsRequest,
  CreateProjectsLocationsCaPoolsResponse,
  CreateProjectsLocationsCaPoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsCaPoolsRequest,
  output: CreateProjectsLocationsCaPoolsResponse,
  errors: [],
}));

export interface PatchProjectsLocationsCaPoolsRequest {
  /** Required. A list of fields to be updated in this request. */
  updateMask?: string;
  /** Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Identifier. The resource name for this CaPool in the format `projects/* /locations/* /caPools/*`. */
  name: string;
  /** Request body */
  body?: CaPool;
}

export const PatchProjectsLocationsCaPoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CaPool).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsCaPoolsRequest>;

export type PatchProjectsLocationsCaPoolsResponse = Operation;
export const PatchProjectsLocationsCaPoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsCaPoolsError = DefaultErrors;

/** Update a CaPool. */
export const patchProjectsLocationsCaPools: API.OperationMethod<
  PatchProjectsLocationsCaPoolsRequest,
  PatchProjectsLocationsCaPoolsResponse,
  PatchProjectsLocationsCaPoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsCaPoolsRequest,
  output: PatchProjectsLocationsCaPoolsResponse,
  errors: [],
}));

export interface SetIamPolicyProjectsLocationsCaPoolsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsCaPoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsCaPoolsRequest>;

export type SetIamPolicyProjectsLocationsCaPoolsResponse = Policy;
export const SetIamPolicyProjectsLocationsCaPoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsCaPoolsError = DefaultErrors;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsCaPools: API.OperationMethod<
  SetIamPolicyProjectsLocationsCaPoolsRequest,
  SetIamPolicyProjectsLocationsCaPoolsResponse,
  SetIamPolicyProjectsLocationsCaPoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsCaPoolsRequest,
  output: SetIamPolicyProjectsLocationsCaPoolsResponse,
  errors: [],
}));

export interface TestIamPermissionsProjectsLocationsCaPoolsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsCaPoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsCaPoolsRequest>;

export type TestIamPermissionsProjectsLocationsCaPoolsResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsCaPoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsCaPoolsError = DefaultErrors;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsCaPools: API.OperationMethod<
  TestIamPermissionsProjectsLocationsCaPoolsRequest,
  TestIamPermissionsProjectsLocationsCaPoolsResponse,
  TestIamPermissionsProjectsLocationsCaPoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsCaPoolsRequest,
  output: TestIamPermissionsProjectsLocationsCaPoolsResponse,
  errors: [],
}));

export interface ListProjectsLocationsCaPoolsRequest {
  /** Optional. Only include resources that match the filter in the response. */
  filter?: string;
  /** Required. The resource name of the location associated with the CaPools, in the format `projects/* /locations/*`. */
  parent: string;
  /** Optional. Specify how the results should be sorted. */
  orderBy?: string;
  /** Optional. Limit on the number of CaPools to include in the response. Further CaPools can subsequently be obtained by including the ListCaPoolsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Pagination token, returned earlier via ListCaPoolsResponse.next_page_token. */
  pageToken?: string;
}

export const ListProjectsLocationsCaPoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/caPools" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsCaPoolsRequest>;

export type ListProjectsLocationsCaPoolsResponse = ListCaPoolsResponse;
export const ListProjectsLocationsCaPoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListCaPoolsResponse;

export type ListProjectsLocationsCaPoolsError = DefaultErrors;

/** Lists CaPools. */
export const listProjectsLocationsCaPools: API.PaginatedOperationMethod<
  ListProjectsLocationsCaPoolsRequest,
  ListProjectsLocationsCaPoolsResponse,
  ListProjectsLocationsCaPoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsCaPoolsRequest,
  output: ListProjectsLocationsCaPoolsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsCaPoolsRequest {
  /** Required. The resource name for this CaPool in the format `projects/* /locations/* /caPools/*`. */
  name: string;
  /** Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. This field allows this pool to be deleted even if it's being depended on by another resource. However, doing so may result in unintended and unrecoverable effects on any dependent resources since the pool will no longer be able to issue certificates. */
  ignoreDependentResources?: boolean;
}

export const DeleteProjectsLocationsCaPoolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    ignoreDependentResources: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("ignoreDependentResources"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsCaPoolsRequest>;

export type DeleteProjectsLocationsCaPoolsResponse = Operation;
export const DeleteProjectsLocationsCaPoolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsCaPoolsError = DefaultErrors;

/** Delete a CaPool. */
export const deleteProjectsLocationsCaPools: API.OperationMethod<
  DeleteProjectsLocationsCaPoolsRequest,
  DeleteProjectsLocationsCaPoolsResponse,
  DeleteProjectsLocationsCaPoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsCaPoolsRequest,
  output: DeleteProjectsLocationsCaPoolsResponse,
  errors: [],
}));

export interface GetProjectsLocationsCaPoolsCertificatesRequest {
  /** Required. The name of the Certificate to get. */
  name: string;
}

export const GetProjectsLocationsCaPoolsCertificatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsCaPoolsCertificatesRequest>;

export type GetProjectsLocationsCaPoolsCertificatesResponse = Certificate;
export const GetProjectsLocationsCaPoolsCertificatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Certificate;

export type GetProjectsLocationsCaPoolsCertificatesError = DefaultErrors;

/** Returns a Certificate. */
export const getProjectsLocationsCaPoolsCertificates: API.OperationMethod<
  GetProjectsLocationsCaPoolsCertificatesRequest,
  GetProjectsLocationsCaPoolsCertificatesResponse,
  GetProjectsLocationsCaPoolsCertificatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsCaPoolsCertificatesRequest,
  output: GetProjectsLocationsCaPoolsCertificatesResponse,
  errors: [],
}));

export interface CreateProjectsLocationsCaPoolsCertificatesRequest {
  /** Optional. It must be unique within a location and match the regular expression `[a-zA-Z0-9_-]{1,63}`. This field is required when using a CertificateAuthority in the Enterprise CertificateAuthority.tier, but is optional and its value is ignored otherwise. */
  certificateId?: string;
  /** Optional. If this is true, no Certificate resource will be persisted regardless of the CaPool's tier, and the returned Certificate will not contain the pem_certificate field. */
  validateOnly?: boolean;
  /** Optional. The resource ID of the CertificateAuthority that should issue the certificate. This optional field will ignore the load-balancing scheme of the Pool and directly issue the certificate from the CA with the specified ID, contained in the same CaPool referenced by `parent`. Per-CA quota rules apply. If left empty, a CertificateAuthority will be chosen from the CaPool by the service. For example, to issue a Certificate from a Certificate Authority with resource name "projects/my-project/locations/us-central1/caPools/my-pool/certificateAuthorities/my-ca", you can set the parent to "projects/my-project/locations/us-central1/caPools/my-pool" and the issuing_certificate_authority_id to "my-ca". */
  issuingCertificateAuthorityId?: string;
  /** Required. The resource name of the CaPool associated with the Certificate, in the format `projects/* /locations/* /caPools/*`. */
  parent: string;
  /** Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: Certificate;
}

export const CreateProjectsLocationsCaPoolsCertificatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    certificateId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("certificateId"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    issuingCertificateAuthorityId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("issuingCertificateAuthorityId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Certificate).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{parent}/certificates", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsCaPoolsCertificatesRequest>;

export type CreateProjectsLocationsCaPoolsCertificatesResponse = Certificate;
export const CreateProjectsLocationsCaPoolsCertificatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Certificate;

export type CreateProjectsLocationsCaPoolsCertificatesError = DefaultErrors;

/** Create a new Certificate in a given Project, Location from a particular CaPool. */
export const createProjectsLocationsCaPoolsCertificates: API.OperationMethod<
  CreateProjectsLocationsCaPoolsCertificatesRequest,
  CreateProjectsLocationsCaPoolsCertificatesResponse,
  CreateProjectsLocationsCaPoolsCertificatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsCaPoolsCertificatesRequest,
  output: CreateProjectsLocationsCaPoolsCertificatesResponse,
  errors: [],
}));

export interface PatchProjectsLocationsCaPoolsCertificatesRequest {
  /** Required. A list of fields to be updated in this request. */
  updateMask?: string;
  /** Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Identifier. The resource name for this Certificate in the format `projects/* /locations/* /caPools/* /certificates/*`. */
  name: string;
  /** Request body */
  body?: Certificate;
}

export const PatchProjectsLocationsCaPoolsCertificatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Certificate).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsCaPoolsCertificatesRequest>;

export type PatchProjectsLocationsCaPoolsCertificatesResponse = Certificate;
export const PatchProjectsLocationsCaPoolsCertificatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Certificate;

export type PatchProjectsLocationsCaPoolsCertificatesError = DefaultErrors;

/** Update a Certificate. Currently, the only field you can update is the labels field. */
export const patchProjectsLocationsCaPoolsCertificates: API.OperationMethod<
  PatchProjectsLocationsCaPoolsCertificatesRequest,
  PatchProjectsLocationsCaPoolsCertificatesResponse,
  PatchProjectsLocationsCaPoolsCertificatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsCaPoolsCertificatesRequest,
  output: PatchProjectsLocationsCaPoolsCertificatesResponse,
  errors: [],
}));

export interface RevokeProjectsLocationsCaPoolsCertificatesRequest {
  /** Required. The resource name for this Certificate in the format `projects/* /locations/* /caPools/* /certificates/*`. */
  name: string;
  /** Request body */
  body?: RevokeCertificateRequest;
}

export const RevokeProjectsLocationsCaPoolsCertificatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RevokeCertificateRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{name}:revoke", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RevokeProjectsLocationsCaPoolsCertificatesRequest>;

export type RevokeProjectsLocationsCaPoolsCertificatesResponse = Certificate;
export const RevokeProjectsLocationsCaPoolsCertificatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Certificate;

export type RevokeProjectsLocationsCaPoolsCertificatesError = DefaultErrors;

/** Revoke a Certificate. */
export const revokeProjectsLocationsCaPoolsCertificates: API.OperationMethod<
  RevokeProjectsLocationsCaPoolsCertificatesRequest,
  RevokeProjectsLocationsCaPoolsCertificatesResponse,
  RevokeProjectsLocationsCaPoolsCertificatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RevokeProjectsLocationsCaPoolsCertificatesRequest,
  output: RevokeProjectsLocationsCaPoolsCertificatesResponse,
  errors: [],
}));

export interface ListProjectsLocationsCaPoolsCertificatesRequest {
  /** Optional. Only include resources that match the filter in the response. For details on supported filters and syntax, see [Certificates Filtering documentation](https://cloud.google.com/certificate-authority-service/docs/sorting-filtering-certificates#filtering_support). */
  filter?: string;
  /** Optional. Limit on the number of Certificates to include in the response. Further Certificates can subsequently be obtained by including the ListCertificatesResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Pagination token, returned earlier via ListCertificatesResponse.next_page_token. */
  pageToken?: string;
  /** Required. The resource name of the parent associated with the Certificates, in the format `projects/* /locations/* /caPools/*`. The parent resource name can be in one of two forms: 1. **Specific CA Pool:** To list certificates within a single CA Pool: `projects/* /locations/* /caPools/*` 2. **All CA Pools in a Location:** To list certificates across *all* CA Pools in a given project and location, use the wildcard character (`-`) in place of the CA Pool ID. Example: `projects/* /locations/* /caPools/-` See go/ccfe-nested-collections#aggregate-listing for more details. */
  parent: string;
  /** Optional. Specify how the results should be sorted. For details on supported fields and syntax, see [Certificates Sorting documentation](https://cloud.google.com/certificate-authority-service/docs/sorting-filtering-certificates#sorting_support). */
  orderBy?: string;
}

export const ListProjectsLocationsCaPoolsCertificatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/certificates" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsCaPoolsCertificatesRequest>;

export type ListProjectsLocationsCaPoolsCertificatesResponse =
  ListCertificatesResponse;
export const ListProjectsLocationsCaPoolsCertificatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListCertificatesResponse;

export type ListProjectsLocationsCaPoolsCertificatesError = DefaultErrors;

/** Lists Certificates. */
export const listProjectsLocationsCaPoolsCertificates: API.PaginatedOperationMethod<
  ListProjectsLocationsCaPoolsCertificatesRequest,
  ListProjectsLocationsCaPoolsCertificatesResponse,
  ListProjectsLocationsCaPoolsCertificatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsCaPoolsCertificatesRequest,
  output: ListProjectsLocationsCaPoolsCertificatesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsCaPoolsCertificateAuthoritiesRequest {
  /** Required. The name of the CertificateAuthority to get. */
  name: string;
}

export const GetProjectsLocationsCaPoolsCertificateAuthoritiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsCaPoolsCertificateAuthoritiesRequest>;

export type GetProjectsLocationsCaPoolsCertificateAuthoritiesResponse =
  CertificateAuthority;
export const GetProjectsLocationsCaPoolsCertificateAuthoritiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ CertificateAuthority;

export type GetProjectsLocationsCaPoolsCertificateAuthoritiesError =
  DefaultErrors;

/** Returns a CertificateAuthority. */
export const getProjectsLocationsCaPoolsCertificateAuthorities: API.OperationMethod<
  GetProjectsLocationsCaPoolsCertificateAuthoritiesRequest,
  GetProjectsLocationsCaPoolsCertificateAuthoritiesResponse,
  GetProjectsLocationsCaPoolsCertificateAuthoritiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsCaPoolsCertificateAuthoritiesRequest,
  output: GetProjectsLocationsCaPoolsCertificateAuthoritiesResponse,
  errors: [],
}));

export interface FetchProjectsLocationsCaPoolsCertificateAuthoritiesRequest {
  /** Required. The resource name for this CertificateAuthority in the format `projects/* /locations/* /caPools/* /certificateAuthorities/*`. */
  name: string;
}

export const FetchProjectsLocationsCaPoolsCertificateAuthoritiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}:fetch" }),
    svc,
  ) as unknown as Schema.Schema<FetchProjectsLocationsCaPoolsCertificateAuthoritiesRequest>;

export type FetchProjectsLocationsCaPoolsCertificateAuthoritiesResponse =
  FetchCertificateAuthorityCsrResponse;
export const FetchProjectsLocationsCaPoolsCertificateAuthoritiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ FetchCertificateAuthorityCsrResponse;

export type FetchProjectsLocationsCaPoolsCertificateAuthoritiesError =
  DefaultErrors;

/** Fetch a certificate signing request (CSR) from a CertificateAuthority that is in state AWAITING_USER_ACTIVATION and is of type SUBORDINATE. The CSR must then be signed by the desired parent Certificate Authority, which could be another CertificateAuthority resource, or could be an on-prem certificate authority. See also ActivateCertificateAuthority. */
export const fetchProjectsLocationsCaPoolsCertificateAuthorities: API.OperationMethod<
  FetchProjectsLocationsCaPoolsCertificateAuthoritiesRequest,
  FetchProjectsLocationsCaPoolsCertificateAuthoritiesResponse,
  FetchProjectsLocationsCaPoolsCertificateAuthoritiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FetchProjectsLocationsCaPoolsCertificateAuthoritiesRequest,
  output: FetchProjectsLocationsCaPoolsCertificateAuthoritiesResponse,
  errors: [],
}));

export interface DisableProjectsLocationsCaPoolsCertificateAuthoritiesRequest {
  /** Required. The resource name for this CertificateAuthority in the format `projects/* /locations/* /caPools/* /certificateAuthorities/*`. */
  name: string;
  /** Request body */
  body?: DisableCertificateAuthorityRequest;
}

export const DisableProjectsLocationsCaPoolsCertificateAuthoritiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(DisableCertificateAuthorityRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{name}:disable", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<DisableProjectsLocationsCaPoolsCertificateAuthoritiesRequest>;

export type DisableProjectsLocationsCaPoolsCertificateAuthoritiesResponse =
  Operation;
export const DisableProjectsLocationsCaPoolsCertificateAuthoritiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DisableProjectsLocationsCaPoolsCertificateAuthoritiesError =
  DefaultErrors;

/** Disable a CertificateAuthority. */
export const disableProjectsLocationsCaPoolsCertificateAuthorities: API.OperationMethod<
  DisableProjectsLocationsCaPoolsCertificateAuthoritiesRequest,
  DisableProjectsLocationsCaPoolsCertificateAuthoritiesResponse,
  DisableProjectsLocationsCaPoolsCertificateAuthoritiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DisableProjectsLocationsCaPoolsCertificateAuthoritiesRequest,
  output: DisableProjectsLocationsCaPoolsCertificateAuthoritiesResponse,
  errors: [],
}));

export interface CreateProjectsLocationsCaPoolsCertificateAuthoritiesRequest {
  /** Required. It must be unique within a location and match the regular expression `[a-zA-Z0-9_-]{1,63}` */
  certificateAuthorityId?: string;
  /** Required. The resource name of the CaPool associated with the CertificateAuthorities, in the format `projects/* /locations/* /caPools/*`. */
  parent: string;
  /** Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: CertificateAuthority;
}

export const CreateProjectsLocationsCaPoolsCertificateAuthoritiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    certificateAuthorityId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("certificateAuthorityId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(CertificateAuthority).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{parent}/certificateAuthorities",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsCaPoolsCertificateAuthoritiesRequest>;

export type CreateProjectsLocationsCaPoolsCertificateAuthoritiesResponse =
  Operation;
export const CreateProjectsLocationsCaPoolsCertificateAuthoritiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsCaPoolsCertificateAuthoritiesError =
  DefaultErrors;

/** Create a new CertificateAuthority in a given Project and Location. */
export const createProjectsLocationsCaPoolsCertificateAuthorities: API.OperationMethod<
  CreateProjectsLocationsCaPoolsCertificateAuthoritiesRequest,
  CreateProjectsLocationsCaPoolsCertificateAuthoritiesResponse,
  CreateProjectsLocationsCaPoolsCertificateAuthoritiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsCaPoolsCertificateAuthoritiesRequest,
  output: CreateProjectsLocationsCaPoolsCertificateAuthoritiesResponse,
  errors: [],
}));

export interface EnableProjectsLocationsCaPoolsCertificateAuthoritiesRequest {
  /** Required. The resource name for this CertificateAuthority in the format `projects/* /locations/* /caPools/* /certificateAuthorities/*`. */
  name: string;
  /** Request body */
  body?: EnableCertificateAuthorityRequest;
}

export const EnableProjectsLocationsCaPoolsCertificateAuthoritiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(EnableCertificateAuthorityRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{name}:enable", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<EnableProjectsLocationsCaPoolsCertificateAuthoritiesRequest>;

export type EnableProjectsLocationsCaPoolsCertificateAuthoritiesResponse =
  Operation;
export const EnableProjectsLocationsCaPoolsCertificateAuthoritiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type EnableProjectsLocationsCaPoolsCertificateAuthoritiesError =
  DefaultErrors;

/** Enable a CertificateAuthority. */
export const enableProjectsLocationsCaPoolsCertificateAuthorities: API.OperationMethod<
  EnableProjectsLocationsCaPoolsCertificateAuthoritiesRequest,
  EnableProjectsLocationsCaPoolsCertificateAuthoritiesResponse,
  EnableProjectsLocationsCaPoolsCertificateAuthoritiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: EnableProjectsLocationsCaPoolsCertificateAuthoritiesRequest,
  output: EnableProjectsLocationsCaPoolsCertificateAuthoritiesResponse,
  errors: [],
}));

export interface PatchProjectsLocationsCaPoolsCertificateAuthoritiesRequest {
  /** Required. A list of fields to be updated in this request. */
  updateMask?: string;
  /** Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Identifier. The resource name for this CertificateAuthority in the format `projects/* /locations/* /caPools/* /certificateAuthorities/*`. */
  name: string;
  /** Request body */
  body?: CertificateAuthority;
}

export const PatchProjectsLocationsCaPoolsCertificateAuthoritiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CertificateAuthority).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsCaPoolsCertificateAuthoritiesRequest>;

export type PatchProjectsLocationsCaPoolsCertificateAuthoritiesResponse =
  Operation;
export const PatchProjectsLocationsCaPoolsCertificateAuthoritiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsCaPoolsCertificateAuthoritiesError =
  DefaultErrors;

/** Update a CertificateAuthority. */
export const patchProjectsLocationsCaPoolsCertificateAuthorities: API.OperationMethod<
  PatchProjectsLocationsCaPoolsCertificateAuthoritiesRequest,
  PatchProjectsLocationsCaPoolsCertificateAuthoritiesResponse,
  PatchProjectsLocationsCaPoolsCertificateAuthoritiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsCaPoolsCertificateAuthoritiesRequest,
  output: PatchProjectsLocationsCaPoolsCertificateAuthoritiesResponse,
  errors: [],
}));

export interface ActivateProjectsLocationsCaPoolsCertificateAuthoritiesRequest {
  /** Required. The resource name for this CertificateAuthority in the format `projects/* /locations/* /caPools/* /certificateAuthorities/*`. */
  name: string;
  /** Request body */
  body?: ActivateCertificateAuthorityRequest;
}

export const ActivateProjectsLocationsCaPoolsCertificateAuthoritiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ActivateCertificateAuthorityRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{name}:activate", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ActivateProjectsLocationsCaPoolsCertificateAuthoritiesRequest>;

export type ActivateProjectsLocationsCaPoolsCertificateAuthoritiesResponse =
  Operation;
export const ActivateProjectsLocationsCaPoolsCertificateAuthoritiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ActivateProjectsLocationsCaPoolsCertificateAuthoritiesError =
  DefaultErrors;

/** Activate a CertificateAuthority that is in state AWAITING_USER_ACTIVATION and is of type SUBORDINATE. After the parent Certificate Authority signs a certificate signing request from FetchCertificateAuthorityCsr, this method can complete the activation process. */
export const activateProjectsLocationsCaPoolsCertificateAuthorities: API.OperationMethod<
  ActivateProjectsLocationsCaPoolsCertificateAuthoritiesRequest,
  ActivateProjectsLocationsCaPoolsCertificateAuthoritiesResponse,
  ActivateProjectsLocationsCaPoolsCertificateAuthoritiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ActivateProjectsLocationsCaPoolsCertificateAuthoritiesRequest,
  output: ActivateProjectsLocationsCaPoolsCertificateAuthoritiesResponse,
  errors: [],
}));

export interface ListProjectsLocationsCaPoolsCertificateAuthoritiesRequest {
  /** Optional. Only include resources that match the filter in the response. */
  filter?: string;
  /** Optional. Limit on the number of CertificateAuthorities to include in the response. Further CertificateAuthorities can subsequently be obtained by including the ListCertificateAuthoritiesResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Pagination token, returned earlier via ListCertificateAuthoritiesResponse.next_page_token. */
  pageToken?: string;
  /** Required. The resource name of the CaPool associated with the CertificateAuthorities, in the format `projects/* /locations/* /caPools/*`. */
  parent: string;
  /** Optional. Specify how the results should be sorted. */
  orderBy?: string;
}

export const ListProjectsLocationsCaPoolsCertificateAuthoritiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/certificateAuthorities" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsCaPoolsCertificateAuthoritiesRequest>;

export type ListProjectsLocationsCaPoolsCertificateAuthoritiesResponse =
  ListCertificateAuthoritiesResponse;
export const ListProjectsLocationsCaPoolsCertificateAuthoritiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListCertificateAuthoritiesResponse;

export type ListProjectsLocationsCaPoolsCertificateAuthoritiesError =
  DefaultErrors;

/** Lists CertificateAuthorities. */
export const listProjectsLocationsCaPoolsCertificateAuthorities: API.PaginatedOperationMethod<
  ListProjectsLocationsCaPoolsCertificateAuthoritiesRequest,
  ListProjectsLocationsCaPoolsCertificateAuthoritiesResponse,
  ListProjectsLocationsCaPoolsCertificateAuthoritiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsCaPoolsCertificateAuthoritiesRequest,
  output: ListProjectsLocationsCaPoolsCertificateAuthoritiesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface UndeleteProjectsLocationsCaPoolsCertificateAuthoritiesRequest {
  /** Required. The resource name for this CertificateAuthority in the format `projects/* /locations/* /caPools/* /certificateAuthorities/*`. */
  name: string;
  /** Request body */
  body?: UndeleteCertificateAuthorityRequest;
}

export const UndeleteProjectsLocationsCaPoolsCertificateAuthoritiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(UndeleteCertificateAuthorityRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{name}:undelete", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UndeleteProjectsLocationsCaPoolsCertificateAuthoritiesRequest>;

export type UndeleteProjectsLocationsCaPoolsCertificateAuthoritiesResponse =
  Operation;
export const UndeleteProjectsLocationsCaPoolsCertificateAuthoritiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type UndeleteProjectsLocationsCaPoolsCertificateAuthoritiesError =
  DefaultErrors;

/** Undelete a CertificateAuthority that has been deleted. */
export const undeleteProjectsLocationsCaPoolsCertificateAuthorities: API.OperationMethod<
  UndeleteProjectsLocationsCaPoolsCertificateAuthoritiesRequest,
  UndeleteProjectsLocationsCaPoolsCertificateAuthoritiesResponse,
  UndeleteProjectsLocationsCaPoolsCertificateAuthoritiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UndeleteProjectsLocationsCaPoolsCertificateAuthoritiesRequest,
  output: UndeleteProjectsLocationsCaPoolsCertificateAuthoritiesResponse,
  errors: [],
}));

export interface DeleteProjectsLocationsCaPoolsCertificateAuthoritiesRequest {
  /** Optional. This field allows this CA to be deleted even if it's being depended on by another resource. However, doing so may result in unintended and unrecoverable effects on any dependent resources since the CA will no longer be able to issue certificates. */
  ignoreDependentResources?: boolean;
  /** Optional. This field allows the CA to be deleted even if the CA has active certs. Active certs include both unrevoked and unexpired certs. */
  ignoreActiveCertificates?: boolean;
  /** Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The resource name for this CertificateAuthority in the format `projects/* /locations/* /caPools/* /certificateAuthorities/*`. */
  name: string;
  /** Optional. If this flag is set, the Certificate Authority will be deleted as soon as possible without a 30-day grace period where undeletion would have been allowed. If you proceed, there will be no way to recover this CA. */
  skipGracePeriod?: boolean;
}

export const DeleteProjectsLocationsCaPoolsCertificateAuthoritiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ignoreDependentResources: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("ignoreDependentResources"),
    ),
    ignoreActiveCertificates: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("ignoreActiveCertificates"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    skipGracePeriod: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("skipGracePeriod"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsCaPoolsCertificateAuthoritiesRequest>;

export type DeleteProjectsLocationsCaPoolsCertificateAuthoritiesResponse =
  Operation;
export const DeleteProjectsLocationsCaPoolsCertificateAuthoritiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsCaPoolsCertificateAuthoritiesError =
  DefaultErrors;

/** Delete a CertificateAuthority. */
export const deleteProjectsLocationsCaPoolsCertificateAuthorities: API.OperationMethod<
  DeleteProjectsLocationsCaPoolsCertificateAuthoritiesRequest,
  DeleteProjectsLocationsCaPoolsCertificateAuthoritiesResponse,
  DeleteProjectsLocationsCaPoolsCertificateAuthoritiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsCaPoolsCertificateAuthoritiesRequest,
  output: DeleteProjectsLocationsCaPoolsCertificateAuthoritiesResponse,
  errors: [],
}));

export interface PatchProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsRequest {
  /** Required. A list of fields to be updated in this request. */
  updateMask?: string;
  /** Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Identifier. The resource name for this CertificateRevocationList in the format `projects/* /locations/* /caPools/*certificateAuthorities/* / certificateRevocationLists/*`. */
  name: string;
  /** Request body */
  body?: CertificateRevocationList;
}

export const PatchProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CertificateRevocationList).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsRequest>;

export type PatchProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsResponse =
  Operation;
export const PatchProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsError =
  DefaultErrors;

/** Update a CertificateRevocationList. */
export const patchProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationLists: API.OperationMethod<
  PatchProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsRequest,
  PatchProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsResponse,
  PatchProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    PatchProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsRequest,
  output:
    PatchProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsResponse,
  errors: [],
}));

export interface SetIamPolicyProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsRequest>;

export type SetIamPolicyProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsResponse =
  Policy;
export const SetIamPolicyProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsError =
  DefaultErrors;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationLists: API.OperationMethod<
  SetIamPolicyProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsRequest,
  SetIamPolicyProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsResponse,
  SetIamPolicyProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    SetIamPolicyProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsRequest,
  output:
    SetIamPolicyProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsResponse,
  errors: [],
}));

export interface TestIamPermissionsProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsRequest>;

export type TestIamPermissionsProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsError =
  DefaultErrors;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationLists: API.OperationMethod<
  TestIamPermissionsProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsRequest,
  TestIamPermissionsProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsResponse,
  TestIamPermissionsProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    TestIamPermissionsProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsRequest,
  output:
    TestIamPermissionsProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsResponse,
  errors: [],
}));

export interface GetProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsRequest {
  /** Required. The name of the CertificateRevocationList to get. */
  name: string;
}

export const GetProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsRequest>;

export type GetProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsResponse =
  CertificateRevocationList;
export const GetProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CertificateRevocationList;

export type GetProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsError =
  DefaultErrors;

/** Returns a CertificateRevocationList. */
export const getProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationLists: API.OperationMethod<
  GetProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsRequest,
  GetProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsResponse,
  GetProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    GetProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsRequest,
  output:
    GetProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsResponse,
  errors: [],
}));

export interface GetIamPolicyProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsRequest>;

export type GetIamPolicyProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsResponse =
  Policy;
export const GetIamPolicyProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsError =
  DefaultErrors;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationLists: API.OperationMethod<
  GetIamPolicyProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsRequest,
  GetIamPolicyProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsResponse,
  GetIamPolicyProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    GetIamPolicyProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsRequest,
  output:
    GetIamPolicyProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsResponse,
  errors: [],
}));

export interface ListProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsRequest {
  /** Optional. Only include resources that match the filter in the response. */
  filter?: string;
  /** Optional. Limit on the number of CertificateRevocationLists to include in the response. Further CertificateRevocationLists can subsequently be obtained by including the ListCertificateRevocationListsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Pagination token, returned earlier via ListCertificateRevocationListsResponse.next_page_token. */
  pageToken?: string;
  /** Required. The resource name of the location associated with the CertificateRevocationLists, in the format `projects/* /locations/* /caPools/* /certificateAuthorities/*`. */
  parent: string;
  /** Optional. Specify how the results should be sorted. */
  orderBy?: string;
}

export const ListProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/certificateRevocationLists" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsRequest>;

export type ListProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsResponse =
  ListCertificateRevocationListsResponse;
export const ListProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListCertificateRevocationListsResponse;

export type ListProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsError =
  DefaultErrors;

/** Lists CertificateRevocationLists. */
export const listProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationLists: API.PaginatedOperationMethod<
  ListProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsRequest,
  ListProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsResponse,
  ListProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input:
    ListProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsRequest,
  output:
    ListProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
