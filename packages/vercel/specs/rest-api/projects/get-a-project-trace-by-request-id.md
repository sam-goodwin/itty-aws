---
title: get-a-project-trace-by-request-id
product: vercel
url: /docs/rest-api/projects/get-a-project-trace-by-request-id
canonical_url: "https://vercel.com/docs/rest-api/projects/get-a-project-trace-by-request-id"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-a-project-trace-by-request-id on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get a project trace by request ID

```http
GET /v1/projects/traces
```

Returns the OTEL trace for a given Vercel CLI request.

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectId` | string. maxLength: 150 | Yes | The project ID |
| `requestId` | string. maxLength: 256 | Yes | The Vercel CLI request ID associated with the trace |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "trace"
  ],
  "properties": {
    "trace": {
      "type": "object",
      "required": [
        "spans",
        "traceId"
      ],
      "properties": {
        "traceId": {
          "type": "string"
        },
        "resources": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "attributes",
              "name"
            ]
          }
        },
        "spans": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "attributes",
              "duration",
              "endTime",
              "events",
              "kind",
              "library",
              "links",
              "name",
              "resource",
              "spanId",
              "startTime",
              "status",
              "traceFlags"
            ]
          }
        },
        "rootSpanId": {
          "type": "string"
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

- [projects endpoints](/docs/rest-api#projects)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
