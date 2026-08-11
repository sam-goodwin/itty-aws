---
title: update-team-directory-sync-role-mappings
product: vercel
url: /docs/rest-api/teams/update-team-directory-sync-role-mappings
canonical_url: "https://vercel.com/docs/rest-api/teams/update-team-directory-sync-role-mappings"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about update-team-directory-sync-role-mappings on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Update Team Directory Sync Role Mappings

```http
POST /v1/teams/{teamId}/dsync-roles
```

Update the Directory Sync role mappings for a Team. This endpoint allows updating the mapping between directory groups and team roles or access groups.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | Yes | The Team identifier to perform the request on behalf of. |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Request body

Required: No

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "roles"
  ],
  "properties": {
    "roles": {
      "type": "object",
      "description": "Directory groups to role or access group mappings.",
      "additionalProperties": {
        "anyOf": [
          {
            "type": "string",
            "enum": [
              "OWNER",
              "MEMBER",
              "DEVELOPER",
              "SECURITY",
              "BILLING",
              "VIEWER",
              "VIEWER_FOR_PLUS",
              "CONTRIBUTOR"
            ]
          },
          {
            "type": "object",
            "required": [
              "accessGroupId"
            ]
          }
        ]
      }
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
    "ok"
  ],
  "properties": {
    "ok": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    }
  }
}
```

### 400: One of the provided values in the request body is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 410: No description

---

## Related

- [teams endpoints](/docs/rest-api#teams)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
