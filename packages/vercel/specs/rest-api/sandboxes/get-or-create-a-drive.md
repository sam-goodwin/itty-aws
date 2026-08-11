---
title: get-or-create-a-drive
product: vercel
url: /docs/rest-api/sandboxes/get-or-create-a-drive
canonical_url: "https://vercel.com/docs/rest-api/sandboxes/get-or-create-a-drive"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-or-create-a-drive on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get or create a drive

```http
POST /v2/sandboxes/drives/{name}
```

Gets an existing drive by project and name, or creates it when it does not exist. Drives are in private beta. Register your interest to get access: https://vercel.com/changelog/drives-for-vercel-sandbox-in-private-beta

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `name` | string. maxLength: 64; pattern: `^[a-zA-Z0-9_-]+$` | Yes | Name for the drive. Must be unique per project and URL-safe (alphanumeric, hyphens, underscores). |


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
  "properties": {
    "projectId": {
      "type": "string",
      "description": "The project ID or name to associate the drive with. Required unless using a Vercel OIDC token scoped to a project."
    },
    "maxSizeBytes": {
      "type": "integer",
      "description": "Maximum drive size in bytes. Defaults to 100 GiB when omitted."
    },
    "region": {
      "type": "string",
      "description": "Region where the drive is stored. Defaults to iad1.",
      "enum": [
        "iad1",
        "sfo1",
        "cle1"
      ],
      "default": "iad1"
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
    "drive"
  ],
  "properties": {
    "drive": {
      "type": "object",
      "description": "This object contains information related to a Vercel Sandbox Drive.",
      "required": [
        "createdAt",
        "maxSizeBytes",
        "name",
        "projectId",
        "region",
        "updatedAt"
      ],
      "properties": {
        "name": {
          "type": "string",
          "description": "The unique drive name within the project."
        },
        "projectId": {
          "type": "string",
          "description": "The project that owns the drive."
        },
        "maxSizeBytes": {
          "type": "number",
          "description": "The maximum drive size in bytes."
        },
        "region": {
          "type": "string",
          "description": "The region where the drive is stored."
        },
        "currentSessionId": {
          "type": "string",
          "description": "Current session ID the drive is attached to, if any."
        },
        "currentSandboxName": {
          "type": "string",
          "description": "Current sandbox name the drive is attached to, if any."
        },
        "createdAt": {
          "type": "number",
          "description": "The time when the drive was created, in milliseconds since the epoch."
        },
        "updatedAt": {
          "type": "number",
          "description": "The last time the drive was updated, in milliseconds since the epoch."
        }
      }
    }
  }
}
```

### 201: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "drive"
  ],
  "properties": {
    "drive": {
      "type": "object",
      "description": "This object contains information related to a Vercel Sandbox Drive.",
      "required": [
        "createdAt",
        "maxSizeBytes",
        "name",
        "projectId",
        "region",
        "updatedAt"
      ],
      "properties": {
        "name": {
          "type": "string",
          "description": "The unique drive name within the project."
        },
        "projectId": {
          "type": "string",
          "description": "The project that owns the drive."
        },
        "maxSizeBytes": {
          "type": "number",
          "description": "The maximum drive size in bytes."
        },
        "region": {
          "type": "string",
          "description": "The region where the drive is stored."
        },
        "currentSessionId": {
          "type": "string",
          "description": "Current session ID the drive is attached to, if any."
        },
        "currentSandboxName": {
          "type": "string",
          "description": "Current sandbox name the drive is attached to, if any."
        },
        "createdAt": {
          "type": "number",
          "description": "The time when the drive was created, in milliseconds since the epoch."
        },
        "updatedAt": {
          "type": "number",
          "description": "The last time the drive was updated, in milliseconds since the epoch."
        }
      }
    }
  }
}
```

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 402: The account is missing a payment so payment method must be updated

### 403: You do not have permission to access this resource.

### 404: No description

### 409: No description

### 410: No description

### 429: No description

---

## Related

- [sandboxes endpoints](/docs/rest-api#sandboxes)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
