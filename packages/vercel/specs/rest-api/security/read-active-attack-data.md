---
title: read-active-attack-data
product: vercel
url: /docs/rest-api/security/read-active-attack-data
canonical_url: "https://vercel.com/docs/rest-api/security/read-active-attack-data"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about read-active-attack-data on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Read active attack data

```http
GET /v1/security/firewall/attack-status
```

Retrieve active attack data within the last N days (default: 1 day)

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectId` | string | Yes |  |
| `since` | number. min: 1 | No |  |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "oneOf": [
    {
      "type": "object"
    },
    {
      "type": "object",
      "required": [
        "anomalies"
      ],
      "properties": {
        "anomalies": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "affectedHostMap",
              "atMinute",
              "endTime",
              "ownerId",
              "projectId",
              "startTime"
            ]
          }
        }
      }
    }
  ]
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

---

## Related

- [security endpoints](/docs/rest-api#security)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
