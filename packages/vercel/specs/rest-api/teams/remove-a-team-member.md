---
title: remove-a-team-member
product: vercel
url: /docs/rest-api/teams/remove-a-team-member
canonical_url: "https://vercel.com/docs/rest-api/teams/remove-a-team-member"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about remove-a-team-member on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Remove a Team Member

```http
DELETE /v1/teams/{teamId}/members/{uid}
```

Remove a Team Member from the Team, or dismiss a user that requested access, or leave a team.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `uid` | string | Yes | The user ID of the member. |
| `teamId` | string | Yes |  |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `newDefaultTeamId` | string | No | The ID of the team to set as the new default team for the Northstar user. |


## Responses

### 200: Successfully removed a member of the team.

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "id"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "ID of the team."
    }
  }
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.
Not authorized to update the team.

### 404: No description

### 410: No description

### 503: No description

---

## Related

- [teams endpoints](/docs/rest-api#teams)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
