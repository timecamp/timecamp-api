Rate
======

GET /rate
----------

Return all rates types for user root group or specified rate for users or tasks or users in tasks. 

Get Variable Array Fields:
* (optional) rate_id: 136 (if not specified will return values for all rate types)
* (optional) task_ids: '123, 456, 789' (comma separated)
* (optional) user_ids: '321, 654, 987' (comma separated)
* (optional) explicit: 1 (optional, by default 1, 1=true, 0=false, if set to false will return implicit value)

_If none of fields are specified will return array with info about rate types_


_By default data are returned in default - XML format, for JSON data format add parameter `format/json` in request url)_
for example `https://www.timecamp.com/third_party/api/rate/api_token/a36cabi96bba83f826/format/json`

Example:
`https://www.timecamp.com/third_party/api/rate/api_token/a36cabi96bba83f826`

Response:
```json
[
  {
    "rate_id":8,
    "name":"Example no 1",
    "is_cost":true
  },
  {
    "rate_id":7,
    "name":"Example no 2",
    "is_cost":false
  }
]
```


Example:
`https://www.timecamp.com/third_party/api/rate/api_token/a36cabi96bba83f826/rate_id/8/task_ids/123,456/user_ids/321,654,987`

Response:
```json
{
  "8": {
      "123": {
        "321":8,
        "654":3,
        "987":0
      },
      "456": {
        "321":23,
        "654":null,
        "987":5
      }
  }
}
```

**Notice that `0` as result is a rate value meanwhile `null` means that for no value was set** 

Example:
`https://www.timecamp.com/third_party/api/rate/api_token/a36cabi96bba83f826/user_ids/321,654,987/explicit/0`

Response:
```json
{
  "8": {
      "321": 0,
      "654": 42,
      "987": null
  },
  "7": {
      "321": 75,
      "654": null,
      "987": 14
  }
}
```

Example:
`https://www.timecamp.com/third_party/api/rate/api_token/a36cabi96bba83f826/rate_id/8/task_ids/123,456`

Response:
```json
{
  "8": {
      "123": 15,
      "456" : 20
  }
}
```

