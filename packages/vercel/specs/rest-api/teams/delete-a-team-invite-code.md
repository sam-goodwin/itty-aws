---
title: delete-a-team-invite-code
product: vercel
url: /docs/rest-api/teams/delete-a-team-invite-code
canonical_url: "https://vercel.com/docs/rest-api/teams/delete-a-team-invite-code"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about delete-a-team-invite-code on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Delete a Team invite code

```http
DELETE /v1/teams/{teamId}/invites/{inviteId}
```

Delete an active Team invite code.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `inviteId` | string | Yes | The Team invite code ID. |
| `teamId` | string | Yes | The Team identifier to perform the request on behalf of. |


## Responses

### 200: Successfully deleted Team invite code.

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
Invite managed by directory sync
Not authorized to access this team.

### 404: Team invite code not found.

### 410: No description

---

## Related

- [teams endpoints](/docs/rest-api#teams)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
