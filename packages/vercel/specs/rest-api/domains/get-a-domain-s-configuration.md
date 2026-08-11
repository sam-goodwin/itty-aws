---
title: get-a-domain-s-configuration
product: vercel
url: /docs/rest-api/domains/get-a-domain-s-configuration
canonical_url: "https://vercel.com/docs/rest-api/domains/get-a-domain-s-configuration"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-a-domain-s-configuration on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get a Domain's configuration

```http
GET /v6/domains/{domain}/config
```

Get a Domain's configuration.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `domain` | string | Yes | The name of the domain. |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectIdOrName` | string | No | The project id or name that will be associated with the domain. Use this when the domain is not yet associated with a project. |
| `strict` | object. enum: true, false | No | When true, the response will only include the nameservers assigned directly to the specified domain. When false and there are no nameservers assigned directly to the specified domain, the response will include the nameservers of the domain's parent zone. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "acceptedChallenges",
    "configuredBy",
    "misconfigured",
    "recommendedCNAME",
    "recommendedIPv4"
  ],
  "properties": {
    "configuredBy": {
      "type": "string",
      "description": "How we see the domain's configuration. - `CNAME`: Domain has a CNAME pointing to Vercel. - `A`: Domain's A record is resolving to Vercel. - `http`: Domain is resolving to Vercel but may be behind a Proxy. - `dns-01`: Domain is not resolving to Vercel but dns-01 challenge is enabled. - `null`: Domain is not resolving to Vercel.",
      "enum": [
        "A",
        "CNAME",
        "dns-01",
        "http",
        null
      ],
      "nullable": true
    },
    "acceptedChallenges": {
      "type": "array",
      "description": "Which challenge types the domain can use for issuing certs.",
      "items": {
        "type": "string",
        "description": "Which challenge types the domain can use for issuing certs.",
        "enum": [
          "dns-01",
          "http-01"
        ]
      }
    },
    "recommendedIPv4": {
      "type": "array",
      "description": "Recommended IPv4s for the domain. rank=1 is the preferred value(s) to use. Only using 1 ip value is acceptable.",
      "items": {
        "type": "object",
        "description": "Recommended IPv4s for the domain. rank=1 is the preferred value(s) to use. Only using 1 ip value is acceptable.",
        "required": [
          "rank",
          "value"
        ],
        "properties": {
          "rank": {
            "type": "number"
          },
          "value": {
            "type": "array"
          }
        }
      }
    },
    "recommendedCNAME": {
      "type": "array",
      "description": "Recommended CNAMEs for the domain. rank=1 is the preferred value to use.",
      "items": {
        "type": "object",
        "description": "Recommended CNAMEs for the domain. rank=1 is the preferred value to use.",
        "required": [
          "rank",
          "value"
        ],
        "properties": {
          "rank": {
            "type": "number"
          },
          "value": {
            "type": "string"
          }
        }
      }
    },
    "misconfigured": {
      "type": "boolean",
      "description": "Whether or not the domain is configured AND we can automatically generate a TLS certificate.",
      "enum": [
        false,
        true
      ]
    }
  }
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 410: No description

---

## Related

- [domains endpoints](/docs/rest-api#domains)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
