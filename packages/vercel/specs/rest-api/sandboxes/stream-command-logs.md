---
title: stream-command-logs
product: vercel
url: /docs/rest-api/sandboxes/stream-command-logs
canonical_url: "https://vercel.com/docs/rest-api/sandboxes/stream-command-logs"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about stream-command-logs on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Stream command logs

```http
GET /v2/sandboxes/sessions/{sessionId}/cmd/{cmdId}/logs
```

Streams the output of a command in real-time using newline-delimited JSON (ND-JSON). Each entry includes the output data and stream type. Stream types include `stdout`, `stderr`, and `error` (for stream failures).

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `sessionId` | string | Yes | The unique identifier of the session containing the command. |
| `cmdId` | string | Yes | The unique identifier of the command to stream logs for. |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/x-ndjson`

```json
{
  "oneOf": [
    {
      "type": "object",
      "required": [
        "data",
        "stream"
      ],
      "properties": {
        "stream": {
          "type": "string"
        },
        "data": {
          "type": "object",
          "required": [
            "code",
            "message"
          ],
          "properties": {
            "code": {
              "type": "string",
              "enum": [
                "sandbox_stream_closed"
              ]
            },
            "message": {
              "type": "string",
              "enum": [
                "Sandbox stream was closed and is not accepting commands."
              ]
            }
          }
        }
      }
    },
    {
      "type": "object",
      "required": [
        "data",
        "stream"
      ],
      "properties": {
        "data": {
          "type": "string"
        },
        "stream": {
          "type": "string"
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

### 422: No description

### 429: No description

### 500: No description

---

## Related

- [sandboxes endpoints](/docs/rest-api#sandboxes)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
