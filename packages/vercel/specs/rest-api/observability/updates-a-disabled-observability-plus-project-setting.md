---
title: updates-a-disabled-observability-plus-project-setting
product: vercel
url: /docs/rest-api/observability/updates-a-disabled-observability-plus-project-setting
canonical_url: "https://vercel.com/docs/rest-api/observability/updates-a-disabled-observability-plus-project-setting"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about updates-a-disabled-observability-plus-project-setting on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Updates a disabled Observability Plus project setting

```http
PUT /v1/observability/manage/configuration/projects/{projectIdOrName}
```

Updates whether Observability Plus is disabled for a single project.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectIdOrName` | string | Yes | The ID or name of the project to update |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Request body

Required: No

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "disabled"
  ],
  "properties": {
    "disabled": {
      "type": "boolean",
      "description": "Whether Observability Plus should be disabled for the project"
    }
  }
}
```

## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "id"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "disabledAt": {
      "type": "number"
    }
  }
}
```

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

### 429: No description

---

## Related

- [observability endpoints](/docs/rest-api#observability)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
