---
title: lists-disabled-observability-plus-projects
product: vercel
url: /docs/rest-api/observability/lists-disabled-observability-plus-projects
canonical_url: "https://vercel.com/docs/rest-api/observability/lists-disabled-observability-plus-projects"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about lists-disabled-observability-plus-projects on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Lists disabled Observability Plus projects

```http
GET /v1/observability/manage/configuration/projects
```

Lists the projects that are currently configured as disabled for Observability Plus on a team.

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "disabledProjects"
  ],
  "properties": {
    "disabledProjects": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "disabledAt",
          "id"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "disabledAt": {
            "type": "number"
          }
        }
      }
    }
  }
}
```

### 400: No description

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

---

## Related

- [observability endpoints](/docs/rest-api#observability)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
