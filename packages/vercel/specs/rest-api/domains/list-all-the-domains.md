---
title: list-all-the-domains
product: vercel
url: /docs/rest-api/domains/list-all-the-domains
canonical_url: "https://vercel.com/docs/rest-api/domains/list-all-the-domains"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about list-all-the-domains on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# List all the domains

```http
GET /v5/domains
```

Retrieves a list of domains registered for the authenticated user or team. By default it returns the last 20 domains if no limit is provided.

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `limit` | number | No | Maximum number of domains to list from a request. |
| `since` | number | No | Get domains created after this JavaScript timestamp. |
| `until` | number | No | Get domains created before this JavaScript timestamp. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: Successful response retrieving a list of domains.

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "domains",
    "pagination"
  ],
  "properties": {
    "domains": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "boughtAt",
          "createdAt",
          "creator",
          "expiresAt",
          "id",
          "intendedNameservers",
          "name",
          "nameservers",
          "serviceType",
          "teamId",
          "userId",
          "verified"
        ],
        "properties": {
          "expiresAt": {
            "type": "number",
            "description": "Timestamp in milliseconds at which the domain is set to expire. null if not bought with Vercel.",
            "nullable": true
          },
          "verified": {
            "type": "boolean",
            "description": "If the domain has the ownership verified.",
            "enum": [
              false,
              true
            ]
          },
          "nameservers": {
            "type": "array",
            "description": "A list of the current nameservers of the domain."
          },
          "intendedNameservers": {
            "type": "array",
            "description": "A list of the intended nameservers for the domain to point to Vercel DNS."
          },
          "customNameservers": {
            "type": "array",
            "description": "A list of custom nameservers for the domain to point to. Only applies to domains purchased with Vercel."
          },
          "creator": {
            "type": "object",
            "description": "An object containing information of the domain creator, including the user's id, username, and email.",
            "required": [
              "email",
              "id",
              "username"
            ]
          },
          "name": {
            "type": "string",
            "description": "The domain name."
          },
          "teamId": {
            "type": "string",
            "nullable": true
          },
          "boughtAt": {
            "type": "number",
            "description": "If it was purchased through Vercel, the timestamp in milliseconds when it was purchased.",
            "nullable": true
          },
          "createdAt": {
            "type": "number",
            "description": "Timestamp in milliseconds when the domain was created in the registry."
          },
          "id": {
            "type": "string",
            "description": "The unique identifier of the domain."
          },
          "renew": {
            "type": "boolean",
            "description": "Indicates whether the domain is set to automatically renew.",
            "enum": [
              false,
              true
            ]
          },
          "serviceType": {
            "type": "string",
            "description": "The type of service the domain is handled by. `external` if the DNS is externally handled, `zeit.world` if handled with Vercel, or `na` if the service is not available.",
            "enum": [
              "external",
              "na",
              "zeit.world"
            ]
          },
          "transferredAt": {
            "type": "number",
            "description": "Timestamp in milliseconds at which the domain was successfully transferred into Vercel. `null` if the transfer is still processing or was never transferred in.",
            "nullable": true
          },
          "transferStartedAt": {
            "type": "number",
            "description": "If transferred into Vercel, timestamp in milliseconds when the domain transfer was initiated."
          },
          "userId": {
            "type": "string"
          }
        }
      }
    },
    "pagination": {
      "type": "object",
      "description": "This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.",
      "required": [
        "count",
        "next",
        "prev"
      ],
      "properties": {
        "count": {
          "type": "number",
          "description": "Amount of items in the current page."
        },
        "next": {
          "type": "number",
          "description": "Timestamp that must be used to request the next page.",
          "nullable": true
        },
        "prev": {
          "type": "number",
          "description": "Timestamp that must be used to request the previous page.",
          "nullable": true
        }
      }
    }
  }
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 409: No description

### 410: No description

---

## Related

- [domains endpoints](/docs/rest-api#domains)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
