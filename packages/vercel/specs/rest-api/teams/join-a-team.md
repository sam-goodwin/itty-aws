---
title: join-a-team
product: vercel
url: /docs/rest-api/teams/join-a-team
canonical_url: "https://vercel.com/docs/rest-api/teams/join-a-team"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about join-a-team on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Join a team

```http
POST /v1/teams/{teamId}/members/teams/join
```

Join a team with a provided invite code or team ID.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | Yes |  |


## Request body

Required: Yes

Content-Type: `application/json`

```json
{
  "type": "object",
  "properties": {
    "inviteCode": {
      "type": "string",
      "description": "The invite code to join the team."
    }
  }
}
```

## Responses

### 200: Successfully joined a team.

Content-Type: `application/json`

```json
{
  "type": "object",
  "description": "Successfully joined a team.",
  "required": [
    "from",
    "name",
    "slug",
    "teamId"
  ],
  "properties": {
    "teamId": {
      "type": "string",
      "description": "The ID of the team the user joined."
    },
    "slug": {
      "type": "string",
      "description": "The slug of the team the user joined."
    },
    "name": {
      "type": "string",
      "description": "The name of the team the user joined."
    },
    "from": {
      "type": "string",
      "description": "The origin of how the user joined."
    }
  }
}
```

### 400: One of the provided values in the request body is invalid.

### 401: No description

### 402: No description

### 403: You do not have permission to access this resource.

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
