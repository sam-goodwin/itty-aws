---
title: promote-restore-or-discard-a-routing-rule-version
product: vercel
url: /docs/rest-api/project-routes/promote-restore-or-discard-a-routing-rule-version
canonical_url: "https://vercel.com/docs/rest-api/project-routes/promote-restore-or-discard-a-routing-rule-version"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about promote-restore-or-discard-a-routing-rule-version on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Promote, restore, or discard a routing rule version

```http
POST /v1/projects/{projectId}/routes/versions
```

Promote staged routing rules to production, restore a previous production version, or discard staged changes. - `promote`: Publishes the staging version to production. - `restore`: Rolls back to a previous production version. - `discard`: Removes the staging version without publishing.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectId` | string | Yes |  |


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
    "id",
    "action"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "action": {
      "type": "string",
      "enum": [
        "promote",
        "restore",
        "discard"
      ]
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
    "version"
  ],
  "properties": {
    "version": {
      "type": "object",
      "description": "A version of routing rules stored in S3.",
      "required": [
        "createdBy",
        "id",
        "lastModified",
        "s3Key"
      ],
      "properties": {
        "id": {
          "type": "string",
          "description": "Unique identifier for the version."
        },
        "s3Key": {
          "type": "string",
          "description": "The S3 key where the routing rules are stored."
        },
        "lastModified": {
          "type": "number",
          "description": "Timestamp of when this version was last modified."
        },
        "createdBy": {
          "type": "string",
          "description": "The user who created this version."
        },
        "isStaging": {
          "type": "boolean",
          "description": "Whether this version is staged and not yet promoted to production.",
          "enum": [
            false,
            true
          ]
        },
        "isLive": {
          "type": "boolean",
          "description": "Whether this version is currently live in production.",
          "enum": [
            false,
            true
          ]
        },
        "ruleCount": {
          "type": "number",
          "description": "The number of routing rules in this version."
        },
        "alias": {
          "type": "string",
          "description": "The staging alias for previewing this version."
        }
      }
    }
  }
}
```

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 409: No description

### 410: No description

### 500: No description

---

## Related

- [project-routes endpoints](/docs/rest-api#project-routes)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
