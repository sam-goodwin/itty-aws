## DNS Record Details

**get** `/zones/{zone_id}/dns_records/{dns_record_id}`

DNS Record Details

### Path Parameters

- `zone_id: string`

  Identifier.

- `dns_record_id: string`

  Identifier.

### Returns

- `errors: array of object { code, message, documentation_url, source }`

  - `code: number`

  - `message: string`

  - `documentation_url: optional string`

  - `source: optional object { pointer }`

    - `pointer: optional string`

- `messages: array of object { code, message, documentation_url, source }`

  - `code: number`

  - `message: string`

  - `documentation_url: optional string`

  - `source: optional object { pointer }`

    - `pointer: optional string`

- `success: true`

  Whether the API call was successful.

  - `true`

- `result: optional RecordResponse`

  - `A = ARecord`

    - `id: string`

      Identifier.

    - `created_on: string`

      When the record was created.

    - `meta: unknown`

      Extra Cloudflare-specific information about the record.

    - `modified_on: string`

      When the record was last modified.

    - `proxiable: boolean`

      Whether the record can be proxied by Cloudflare or not.

    - `comment_modified_on: optional string`

      When the record comment was last modified. Omitted if there is no comment.

    - `tags_modified_on: optional string`

      When the record tags were last modified. Omitted if there are no tags.

  - `AAAA = AAAARecord`

    - `id: string`

      Identifier.

    - `created_on: string`

      When the record was created.

    - `meta: unknown`

      Extra Cloudflare-specific information about the record.

    - `modified_on: string`

      When the record was last modified.

    - `proxiable: boolean`

      Whether the record can be proxied by Cloudflare or not.

    - `comment_modified_on: optional string`

      When the record comment was last modified. Omitted if there is no comment.

    - `tags_modified_on: optional string`

      When the record tags were last modified. Omitted if there are no tags.

  - `CNAME = CNAMERecord`

    - `id: string`

      Identifier.

    - `created_on: string`

      When the record was created.

    - `meta: unknown`

      Extra Cloudflare-specific information about the record.

    - `modified_on: string`

      When the record was last modified.

    - `proxiable: boolean`

      Whether the record can be proxied by Cloudflare or not.

    - `comment_modified_on: optional string`

      When the record comment was last modified. Omitted if there is no comment.

    - `tags_modified_on: optional string`

      When the record tags were last modified. Omitted if there are no tags.

  - `MX = MXRecord`

    - `id: string`

      Identifier.

    - `created_on: string`

      When the record was created.

    - `meta: unknown`

      Extra Cloudflare-specific information about the record.

    - `modified_on: string`

      When the record was last modified.

    - `proxiable: boolean`

      Whether the record can be proxied by Cloudflare or not.

    - `comment_modified_on: optional string`

      When the record comment was last modified. Omitted if there is no comment.

    - `tags_modified_on: optional string`

      When the record tags were last modified. Omitted if there are no tags.

  - `NS = NSRecord`

    - `id: string`

      Identifier.

    - `created_on: string`

      When the record was created.

    - `meta: unknown`

      Extra Cloudflare-specific information about the record.

    - `modified_on: string`

      When the record was last modified.

    - `proxiable: boolean`

      Whether the record can be proxied by Cloudflare or not.

    - `comment_modified_on: optional string`

      When the record comment was last modified. Omitted if there is no comment.

    - `tags_modified_on: optional string`

      When the record tags were last modified. Omitted if there are no tags.

  - `Openpgpkey object { id, comment, content, 12 more }`

    - `id: string`

      Identifier.

    - `comment: string`

      Comments or notes about the DNS record. This field has no effect on DNS responses.

    - `content: string`

      A single Base64-encoded OpenPGP Transferable Public Key (RFC 4880 Section 11.1)

    - `created_on: string`

      When the record was created.

    - `meta: unknown`

      Extra Cloudflare-specific information about the record.

    - `modified_on: string`

      When the record was last modified.

    - `name: string`

      Complete DNS record name, including the zone name, in Punycode.

    - `proxiable: boolean`

      Whether the record can be proxied by Cloudflare or not.

    - `proxied: boolean`

      Whether the record is receiving the performance and security benefits of Cloudflare.

    - `settings: object { ipv4_only, ipv6_only }`

      Settings for the DNS record.

      - `ipv4_only: optional boolean`

        When enabled, only A records will be generated, and AAAA records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.

      - `ipv6_only: optional boolean`

        When enabled, only AAAA records will be generated, and A records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.

    - `tags: array of RecordTags`

      Custom tags for the DNS record. This field has no effect on DNS responses.

    - `ttl: TTL`

      Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones.

      - `number`

      - `1`

        Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones.

        - `1`

    - `type: "OPENPGPKEY"`

      Record type.

      - `"OPENPGPKEY"`

    - `comment_modified_on: optional string`

      When the record comment was last modified. Omitted if there is no comment.

    - `tags_modified_on: optional string`

      When the record tags were last modified. Omitted if there are no tags.

  - `PTR = PTRRecord`

    - `id: string`

      Identifier.

    - `created_on: string`

      When the record was created.

    - `meta: unknown`

      Extra Cloudflare-specific information about the record.

    - `modified_on: string`

      When the record was last modified.

    - `proxiable: boolean`

      Whether the record can be proxied by Cloudflare or not.

    - `comment_modified_on: optional string`

      When the record comment was last modified. Omitted if there is no comment.

    - `tags_modified_on: optional string`

      When the record tags were last modified. Omitted if there are no tags.

  - `TXT = TXTRecord`

    - `id: string`

      Identifier.

    - `created_on: string`

      When the record was created.

    - `meta: unknown`

      Extra Cloudflare-specific information about the record.

    - `modified_on: string`

      When the record was last modified.

    - `proxiable: boolean`

      Whether the record can be proxied by Cloudflare or not.

    - `comment_modified_on: optional string`

      When the record comment was last modified. Omitted if there is no comment.

    - `tags_modified_on: optional string`

      When the record tags were last modified. Omitted if there are no tags.

  - `CAA = CAARecord`

    - `id: string`

      Identifier.

    - `created_on: string`

      When the record was created.

    - `meta: unknown`

      Extra Cloudflare-specific information about the record.

    - `modified_on: string`

      When the record was last modified.

    - `proxiable: boolean`

      Whether the record can be proxied by Cloudflare or not.

    - `comment_modified_on: optional string`

      When the record comment was last modified. Omitted if there is no comment.

    - `tags_modified_on: optional string`

      When the record tags were last modified. Omitted if there are no tags.

  - `CERT = CERTRecord`

    - `id: string`

      Identifier.

    - `created_on: string`

      When the record was created.

    - `meta: unknown`

      Extra Cloudflare-specific information about the record.

    - `modified_on: string`

      When the record was last modified.

    - `proxiable: boolean`

      Whether the record can be proxied by Cloudflare or not.

    - `comment_modified_on: optional string`

      When the record comment was last modified. Omitted if there is no comment.

    - `tags_modified_on: optional string`

      When the record tags were last modified. Omitted if there are no tags.

  - `DNSKEY = DNSKEYRecord`

    - `id: string`

      Identifier.

    - `created_on: string`

      When the record was created.

    - `meta: unknown`

      Extra Cloudflare-specific information about the record.

    - `modified_on: string`

      When the record was last modified.

    - `proxiable: boolean`

      Whether the record can be proxied by Cloudflare or not.

    - `comment_modified_on: optional string`

      When the record comment was last modified. Omitted if there is no comment.

    - `tags_modified_on: optional string`

      When the record tags were last modified. Omitted if there are no tags.

  - `DS = DSRecord`

    - `id: string`

      Identifier.

    - `created_on: string`

      When the record was created.

    - `meta: unknown`

      Extra Cloudflare-specific information about the record.

    - `modified_on: string`

      When the record was last modified.

    - `proxiable: boolean`

      Whether the record can be proxied by Cloudflare or not.

    - `comment_modified_on: optional string`

      When the record comment was last modified. Omitted if there is no comment.

    - `tags_modified_on: optional string`

      When the record tags were last modified. Omitted if there are no tags.

  - `HTTPS = HTTPSRecord`

    - `id: string`

      Identifier.

    - `created_on: string`

      When the record was created.

    - `meta: unknown`

      Extra Cloudflare-specific information about the record.

    - `modified_on: string`

      When the record was last modified.

    - `proxiable: boolean`

      Whether the record can be proxied by Cloudflare or not.

    - `comment_modified_on: optional string`

      When the record comment was last modified. Omitted if there is no comment.

    - `tags_modified_on: optional string`

      When the record tags were last modified. Omitted if there are no tags.

  - `LOC = LOCRecord`

    - `id: string`

      Identifier.

    - `created_on: string`

      When the record was created.

    - `meta: unknown`

      Extra Cloudflare-specific information about the record.

    - `modified_on: string`

      When the record was last modified.

    - `proxiable: boolean`

      Whether the record can be proxied by Cloudflare or not.

    - `comment_modified_on: optional string`

      When the record comment was last modified. Omitted if there is no comment.

    - `tags_modified_on: optional string`

      When the record tags were last modified. Omitted if there are no tags.

  - `NAPTR = NAPTRRecord`

    - `id: string`

      Identifier.

    - `created_on: string`

      When the record was created.

    - `meta: unknown`

      Extra Cloudflare-specific information about the record.

    - `modified_on: string`

      When the record was last modified.

    - `proxiable: boolean`

      Whether the record can be proxied by Cloudflare or not.

    - `comment_modified_on: optional string`

      When the record comment was last modified. Omitted if there is no comment.

    - `tags_modified_on: optional string`

      When the record tags were last modified. Omitted if there are no tags.

  - `SMIMEA = SMIMEARecord`

    - `id: string`

      Identifier.

    - `created_on: string`

      When the record was created.

    - `meta: unknown`

      Extra Cloudflare-specific information about the record.

    - `modified_on: string`

      When the record was last modified.

    - `proxiable: boolean`

      Whether the record can be proxied by Cloudflare or not.

    - `comment_modified_on: optional string`

      When the record comment was last modified. Omitted if there is no comment.

    - `tags_modified_on: optional string`

      When the record tags were last modified. Omitted if there are no tags.

  - `SRV = SRVRecord`

    - `id: string`

      Identifier.

    - `created_on: string`

      When the record was created.

    - `meta: unknown`

      Extra Cloudflare-specific information about the record.

    - `modified_on: string`

      When the record was last modified.

    - `proxiable: boolean`

      Whether the record can be proxied by Cloudflare or not.

    - `comment_modified_on: optional string`

      When the record comment was last modified. Omitted if there is no comment.

    - `tags_modified_on: optional string`

      When the record tags were last modified. Omitted if there are no tags.

  - `SSHFP = SSHFPRecord`

    - `id: string`

      Identifier.

    - `created_on: string`

      When the record was created.

    - `meta: unknown`

      Extra Cloudflare-specific information about the record.

    - `modified_on: string`

      When the record was last modified.

    - `proxiable: boolean`

      Whether the record can be proxied by Cloudflare or not.

    - `comment_modified_on: optional string`

      When the record comment was last modified. Omitted if there is no comment.

    - `tags_modified_on: optional string`

      When the record tags were last modified. Omitted if there are no tags.

  - `SVCB = SVCBRecord`

    - `id: string`

      Identifier.

    - `created_on: string`

      When the record was created.

    - `meta: unknown`

      Extra Cloudflare-specific information about the record.

    - `modified_on: string`

      When the record was last modified.

    - `proxiable: boolean`

      Whether the record can be proxied by Cloudflare or not.

    - `comment_modified_on: optional string`

      When the record comment was last modified. Omitted if there is no comment.

    - `tags_modified_on: optional string`

      When the record tags were last modified. Omitted if there are no tags.

  - `TLSA = TLSARecord`

    - `id: string`

      Identifier.

    - `created_on: string`

      When the record was created.

    - `meta: unknown`

      Extra Cloudflare-specific information about the record.

    - `modified_on: string`

      When the record was last modified.

    - `proxiable: boolean`

      Whether the record can be proxied by Cloudflare or not.

    - `comment_modified_on: optional string`

      When the record comment was last modified. Omitted if there is no comment.

    - `tags_modified_on: optional string`

      When the record tags were last modified. Omitted if there are no tags.

  - `URI = URIRecord`

    - `id: string`

      Identifier.

    - `created_on: string`

      When the record was created.

    - `meta: unknown`

      Extra Cloudflare-specific information about the record.

    - `modified_on: string`

      When the record was last modified.

    - `proxiable: boolean`

      Whether the record can be proxied by Cloudflare or not.

    - `comment_modified_on: optional string`

      When the record comment was last modified. Omitted if there is no comment.

    - `tags_modified_on: optional string`

      When the record tags were last modified. Omitted if there are no tags.

### Example

```http
curl https://api.cloudflare.com/client/v4/zones/$ZONE_ID/dns_records/$DNS_RECORD_ID \
    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"
```

#### Response

```json
{
  "errors": [
    {
      "code": 1000,
      "message": "message",
      "documentation_url": "documentation_url",
      "source": {
        "pointer": "pointer"
      }
    }
  ],
  "messages": [
    {
      "code": 1000,
      "message": "message",
      "documentation_url": "documentation_url",
      "source": {
        "pointer": "pointer"
      }
    }
  ],
  "success": true,
  "result": {
    "name": "example.com",
    "ttl": 3600,
    "type": "A",
    "comment": "Domain verification record",
    "content": "198.51.100.4",
    "private_routing": true,
    "proxied": true,
    "settings": {
      "ipv4_only": true,
      "ipv6_only": true
    },
    "tags": [
      "owner:dns-team"
    ],
    "id": "023e105f4ecef8ad9ca31a8372d0c353",
    "created_on": "2014-01-01T05:20:00.12345Z",
    "meta": {},
    "modified_on": "2014-01-01T05:20:00.12345Z",
    "proxiable": true,
    "comment_modified_on": "2024-01-01T05:20:00.12345Z",
    "tags_modified_on": "2025-01-01T05:20:00.12345Z"
  }
}
```
