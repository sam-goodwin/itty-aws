---
title: retrieve-project-domains-by-project-by-id-or-name
product: vercel
url: /docs/rest-api/projects/retrieve-project-domains-by-project-by-id-or-name
canonical_url: "https://vercel.com/docs/rest-api/projects/retrieve-project-domains-by-project-by-id-or-name"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about retrieve-project-domains-by-project-by-id-or-name on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Retrieve project domains by project by id or name

```http
GET /v9/projects/{idOrName}/domains
```

Retrieve the domains associated with a given project by passing either the project `id` or `name` in the URL.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `idOrName` | object | Yes | The unique project identifier or the project name |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `production` | object. enum: true, false; default: "false" | No | Filters only production domains when set to `true`. |
| `target` | string. enum: production, preview | No | Filters on the target of the domain. Can be either "production", "preview" |
| `customEnvironmentId` | string | No | The unique custom environment identifier within the project |
| `gitBranch` | string | No | Filters domains based on specific branch. |
| `redirects` | object. enum: true, false; default: "true" | No | Excludes redirect project domains when "false". Includes redirect project domains when "true" (default). |
| `redirect` | string | No | Filters domains based on their redirect target. |
| `verified` | object. enum: true, false | No | Filters domains based on their verification status. |
| `limit` | number | No | Maximum number of domains to list from a request (max 100). |
| `since` | number | No | Get domains created after this JavaScript timestamp. |
| `until` | number | No | Get domains created before this JavaScript timestamp. |
| `order` | object. enum: ASC, DESC; default: "DESC" | No | Domains sort order by createdAt |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: Successful response retrieving a list of domains

Content-Type: `application/json`

```json
{
  "oneOf": [
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
              "apexName",
              "name",
              "projectId",
              "verified"
            ]
          }
        },
        "pagination": {
          "type": "object",
          "required": [
            "count",
            "next",
            "prev"
          ],
          "properties": {
            "count": {
              "type": "number"
            },
            "next": {
              "type": "number",
              "nullable": true
            },
            "prev": {
              "type": "number",
              "nullable": true
            }
          }
        }
      }
    },
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
              "apexName",
              "name",
              "projectId",
              "verified"
            ]
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
  ]
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 410: No description

---

## Related

- [projects endpoints](/docs/rest-api#projects)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
