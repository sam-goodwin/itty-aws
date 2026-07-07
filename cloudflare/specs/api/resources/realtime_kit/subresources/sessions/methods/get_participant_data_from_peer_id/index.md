## Fetch details of peer

**get** `/accounts/{account_id}/realtime/kit/{app_id}/sessions/peer-report/{peer_id}`

Returns participant details for the given peer ID along with call statistics.

### Path Parameters

- `account_id: string`

  The account identifier tag.

- `app_id: string`

  The app identifier tag.

- `peer_id: string`

### Query Parameters

- `filters: optional "device_info" or "ip_information" or "precall_network_information" or 2 more`

  Filter to apply to the peer report.

  - `"device_info"`

  - `"ip_information"`

  - `"precall_network_information"`

  - `"events"`

  - `"quality_stats"`

- `include_peer_events: optional boolean`

  if true, response includes all the peer events of participant.

### Returns

- `data: optional object { participant }`

  - `participant: optional object { id, created_at, custom_participant_id, 10 more }`

    - `id: optional string`

      ID of the participant.

    - `created_at: optional string`

      timestamp when this participant was created.

    - `custom_participant_id: optional string`

      ID passed by client to create this participant.

    - `display_name: optional string`

      Display name of participant when joining the session.

    - `duration: optional number`

      number of minutes for which the participant was in the session.

    - `joined_at: optional string`

      timestamp at which participant joined the session.

    - `left_at: optional string`

      timestamp at which participant left the session.

    - `peer_events: optional array of map[unknown]`

    - `peer_report: optional object { metadata, quality }`

      Peer call statistics report.

      - `metadata: optional map[unknown]`

      - `quality: optional map[unknown]`

    - `role: optional string`

      Name of the preset associated with the participant.

    - `session_id: optional string`

    - `updated_at: optional string`

      timestamp when this participant's data was last updated.

    - `user_id: optional string`

      User id for this participant.

- `success: optional boolean`

### Example

```http
curl https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/realtime/kit/$APP_ID/sessions/peer-report/$PEER_ID \
    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"
```

#### Response

```json
{
  "data": {
    "participant": {
      "id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "created_at": "created_at",
      "custom_participant_id": "custom_participant_id",
      "display_name": "display_name",
      "duration": 0,
      "joined_at": "joined_at",
      "left_at": "left_at",
      "peer_events": [
        {
          "foo": "bar"
        }
      ],
      "peer_report": {
        "metadata": {
          "foo": "bar"
        },
        "quality": {
          "foo": "bar"
        }
      },
      "role": "role",
      "session_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      "updated_at": "updated_at",
      "user_id": "user_id"
    }
  },
  "success": true
}
```
