---
title: list-project-domains-by-apex-domain
product: vercel
url: /docs/rest-api/domains/list-project-domains-by-apex-domain
canonical_url: "https://vercel.com/docs/rest-api/domains/list-project-domains-by-apex-domain"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about list-project-domains-by-apex-domain on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# List Project Domains by Apex Domain

```http
GET /v1/domains/{domain}/project-domains
```

List all project domains associated with an apex domain owned by the authenticated account.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `domain` | string | Yes | The apex domain name. |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `limit` | number | No | Maximum number of project domains to list from a request. |
| `since` | number | No | Get project domains created after this JavaScript timestamp. |
| `until` | number | No | Get project domains created before this JavaScript timestamp. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: Successful response retrieving project domains for an apex domain.

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "pagination",
    "projectDomains"
  ],
  "properties": {
    "projectDomains": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "apexName",
          "name",
          "projectId",
          "verified"
        ],
        "properties": {
          "name": {
            "type": "string"
          },
          "apexName": {
            "type": "string"
          },
          "projectId": {
            "type": "string"
          },
          "redirect": {
            "type": "string",
            "nullable": true
          },
          "redirectStatusCode": {
            "type": "number",
            "enum": [
              301,
              302,
              307,
              308,
              null
            ],
            "nullable": true
          },
          "gitBranch": {
            "type": "string",
            "nullable": true
          },
          "customEnvironmentId": {
            "type": "string",
            "nullable": true
          },
          "updatedAt": {
            "type": "number"
          },
          "createdAt": {
            "type": "number"
          },
          "verified": {
            "type": "boolean",
            "description": "`true` if the domain is verified for use with the project. If `false` it will not be used as an alias on this project until the challenge in `verification` is completed.",
            "enum": [
              false,
              true
            ]
          },
          "verification": {
            "type": "array",
            "description": "A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.type = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`."
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

### 404: No description

### 410: No description

---

## Related

- [domains endpoints](/docs/rest-api#domains)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
