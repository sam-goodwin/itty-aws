---
title: get-a-check-run
product: vercel
url: /docs/rest-api/checks-v2/get-a-check-run
canonical_url: "https://vercel.com/docs/rest-api/checks-v2/get-a-check-run"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-a-check-run on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get a check run

```http
GET /v2/deployments/{deploymentId}/check-runs/{checkRunId}
```

Return a detailed response for a single check run.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `deploymentId` | string | Yes |  |
| `checkRunId` | string | Yes | The ID of the resource that will be updated. |


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
  "oneOf": [
    {
      "type": "object",
      "description": "Check run backed by a project-level `check` definition.",
      "required": [
        "checkId",
        "createdAt",
        "deploymentId",
        "id",
        "name",
        "ownerId",
        "source",
        "status",
        "timeout",
        "updatedAt"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "ownerId": {
          "type": "string"
        },
        "deploymentId": {
          "type": "string"
        },
        "projectId": {
          "type": "string"
        },
        "requires": {
          "type": "string",
          "enum": [
            "build-ready",
            "deployment-url",
            "none"
          ]
        },
        "blocks": {
          "type": "string",
          "enum": [
            "build-start",
            "deployment-alias",
            "deployment-promotion",
            "deployment-start",
            "none"
          ]
        },
        "targets": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "status": {
          "type": "string",
          "enum": [
            "completed",
            "queued",
            "running"
          ]
        },
        "conclusion": {
          "type": "string",
          "enum": [
            "canceled",
            "failed",
            "neutral",
            "skipped",
            "succeeded",
            "timeout"
          ]
        },
        "conclusionText": {
          "type": "string"
        },
        "externalId": {
          "type": "string"
        },
        "externalUrl": {
          "type": "string"
        },
        "output": {
          "type": "object",
          "additionalProperties": true
        },
        "timeout": {
          "type": "number"
        },
        "createdAt": {
          "type": "number"
        },
        "updatedAt": {
          "type": "number"
        },
        "completedAt": {
          "type": "number"
        },
        "checkId": {
          "type": "string"
        },
        "source": {
          "oneOf": [
            {
              "type": "object",
              "required": [
                "integrationConfigurationId",
                "integrationId",
                "kind"
              ]
            },
            {
              "type": "object",
              "required": [
                "kind"
              ]
            },
            {
              "type": "object",
              "required": [
                "externalCheckName",
                "kind",
                "provider"
              ]
            },
            {
              "type": "object",
              "description": "Native Vercel checks — check definition and check run `source`."
            }
          ]
        }
      }
    },
    {
      "type": "object",
      "description": "Vercel CI check run without a parent `check` (no `checkId` field).",
      "required": [
        "createdAt",
        "deploymentId",
        "id",
        "name",
        "ownerId",
        "source",
        "status",
        "timeout",
        "updatedAt"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "ownerId": {
          "type": "string"
        },
        "deploymentId": {
          "type": "string"
        },
        "projectId": {
          "type": "string"
        },
        "requires": {
          "type": "string",
          "enum": [
            "build-ready",
            "deployment-url",
            "none"
          ]
        },
        "blocks": {
          "type": "string",
          "enum": [
            "build-start",
            "deployment-alias",
            "deployment-promotion",
            "deployment-start",
            "none"
          ]
        },
        "targets": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "status": {
          "type": "string",
          "enum": [
            "completed",
            "queued",
            "running"
          ]
        },
        "conclusion": {
          "type": "string",
          "enum": [
            "canceled",
            "failed",
            "neutral",
            "skipped",
            "succeeded",
            "timeout"
          ]
        },
        "conclusionText": {
          "type": "string"
        },
        "externalId": {
          "type": "string"
        },
        "externalUrl": {
          "type": "string"
        },
        "output": {
          "type": "object",
          "additionalProperties": true
        },
        "timeout": {
          "type": "number"
        },
        "createdAt": {
          "type": "number"
        },
        "updatedAt": {
          "type": "number"
        },
        "completedAt": {
          "type": "number"
        },
        "source": {
          "oneOf": [
            {
              "type": "object",
              "description": "Config-driven CI task — check run `source` only (no parent check).",
              "required": [
                "invocationId",
                "jobDefinitionId",
                "origin",
                "subKind"
              ]
            },
            {
              "type": "object",
              "description": "CI sentinel — check run `source` only (no parent check).",
              "required": [
                "origin",
                "subKind"
              ]
            }
          ]
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

### 500: No description

---

## Related

- [checks-v2 endpoints](/docs/rest-api#checks-v2)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
