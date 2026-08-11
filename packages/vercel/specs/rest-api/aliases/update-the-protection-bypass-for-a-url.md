---
title: update-the-protection-bypass-for-a-url
product: vercel
url: /docs/rest-api/aliases/update-the-protection-bypass-for-a-url
canonical_url: "https://vercel.com/docs/rest-api/aliases/update-the-protection-bypass-for-a-url"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about update-the-protection-bypass-for-a-url on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Update the protection bypass for a URL

```http
PATCH /aliases/{id}/protection-bypass
```

Update the protection bypass for the alias or deployment URL (used for user access & comment access for deployments). Used as shareable links and user scoped access for Vercel Authentication and also to allow external (logged in) people to comment on previews for Preview Comments (next-live-mode).

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes | The alias or deployment ID |


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
  "oneOf": [
    {
      "type": "object",
      "properties": {
        "ttl": {
          "type": "number",
          "description": "Optional time the shareable link is valid for in seconds. If not provided, the shareable link will never expire.",
          "maximum": 63072000
        },
        "revoke": {
          "type": "object",
          "description": "Optional instructions for revoking and regenerating a shareable link",
          "required": [
            "secret",
            "regenerate"
          ],
          "properties": {
            "secret": {
              "type": "string",
              "description": "Sharebale link to revoked"
            },
            "regenerate": {
              "type": "boolean",
              "description": "Whether or not a new shareable link should be created after the provided secret is revoked"
            }
          }
        }
      }
    },
    {
      "type": "object",
      "required": [
        "scope"
      ],
      "properties": {
        "scope": {
          "type": "object",
          "description": "Instructions for creating a user scoped protection bypass",
          "properties": {
            "userId": {
              "type": "string",
              "description": "Specified user id for the scoped bypass."
            },
            "email": {
              "type": "string",
              "description": "Specified email for the scoped bypass.",
              "format": "email"
            },
            "access": {
              "description": "Invitation status for the user scoped bypass.",
              "enum": [
                "denied",
                "granted"
              ]
            }
          },
          "allOf": [
            {},
            {
              "required": [
                "access"
              ]
            }
          ]
        }
      }
    },
    {
      "type": "object",
      "required": [
        "override"
      ],
      "properties": {
        "override": {
          "type": "object",
          "required": [
            "scope",
            "action"
          ],
          "properties": {
            "scope": {
              "enum": [
                "alias-protection-override"
              ]
            },
            "action": {
              "enum": [
                "create",
                "revoke"
              ]
            }
          }
        }
      }
    }
  ]
}
```

## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "additionalProperties": true
}
```

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 409: No description

### 410: No description

### 428: No description

---

## Related

- [aliases endpoints](/docs/rest-api#aliases)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
