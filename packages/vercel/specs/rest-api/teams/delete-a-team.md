---
title: delete-a-team
product: vercel
url: /docs/rest-api/teams/delete-a-team
canonical_url: "https://vercel.com/docs/rest-api/teams/delete-a-team"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about delete-a-team on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Delete a Team

```http
DELETE /v1/teams/{teamId}
```

Delete a team under your account. You need to send a `DELETE` request with the desired team `id`. An optional array of reasons for deletion may also be sent.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | Yes | The Team identifier to perform the request on behalf of. |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `newDefaultTeamId` | string | No | Id of the team to be set as the new default team |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Request body

Required: Yes

Content-Type: `application/json`

```json
{
  "type": "object",
  "properties": {
    "reasons": {
      "type": "array",
      "description": "Optional array of objects that describe the reason why the team is being deleted.",
      "items": {
        "type": "object",
        "description": "An object describing the reason why the team is being deleted.",
        "required": [
          "slug",
          "description"
        ],
        "properties": {
          "slug": {
            "type": "string",
            "description": "Idenitifier slug of the reason why the team is being deleted."
          },
          "description": {
            "type": "string",
            "description": "Description of the reason why the team is being deleted."
          }
        }
      }
    }
  }
}
```

## Responses

### 200: The Team was successfully deleted

Content-Type: `application/json`

```json
{
  "type": "object",
  "description": "The Team was successfully deleted",
  "required": [
    "id"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID of the deleted Team"
    },
    "newDefaultTeamIdError": {
      "type": "boolean",
      "description": "Signifies whether the default team update has failed, when newDefaultTeamId is provided in request query.",
      "enum": [
        false,
        true
      ]
    }
  }
}
```

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 402: No description

### 403: You do not have permission to access this resource.
The authenticated user can't access the team

### 409: No description

### 410: No description

---

## Related

- [teams endpoints](/docs/rest-api#teams)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
