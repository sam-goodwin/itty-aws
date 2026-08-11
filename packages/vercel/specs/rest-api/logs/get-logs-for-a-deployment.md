---
title: get-logs-for-a-deployment
product: vercel
url: /docs/rest-api/logs/get-logs-for-a-deployment
canonical_url: "https://vercel.com/docs/rest-api/logs/get-logs-for-a-deployment"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-logs-for-a-deployment on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get logs for a deployment

```http
GET /v1/projects/{projectId}/deployments/{deploymentId}/runtime-logs
```

Returns a stream of logs for a given deployment.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectId` | string | Yes |  |
| `deploymentId` | string | Yes |  |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/stream+json`

```json
{
  "type": "object",
  "required": [
    "domain",
    "level",
    "message",
    "messageTruncated",
    "requestMethod",
    "requestPath",
    "responseStatusCode",
    "rowId",
    "source",
    "timestampInMs"
  ],
  "properties": {
    "level": {
      "type": "string",
      "enum": [
        "debug",
        "error",
        "fatal",
        "info",
        "trace",
        "warning"
      ]
    },
    "message": {
      "type": "string"
    },
    "rowId": {
      "type": "string"
    },
    "source": {
      "type": "string",
      "enum": [
        "delimiter",
        "edge-function",
        "edge-middleware",
        "request",
        "serverless"
      ]
    },
    "timestampInMs": {
      "type": "number"
    },
    "domain": {
      "type": "string"
    },
    "messageTruncated": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    },
    "requestMethod": {
      "type": "string"
    },
    "requestPath": {
      "type": "string"
    },
    "responseStatusCode": {
      "type": "number"
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

- [logs endpoints](/docs/rest-api#logs)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
