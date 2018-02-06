Rate
======

GET /rate
----------

Return all rates types for user root group or specified rate for users or tasks or users in tasks. 

Get Variable Array Fields:
* (optional/required) rate_id: 123 (it's required if one of rest fields specified, 
also if this field specified it's necessary to provide at least one of rest fields)
* (optional) task_ids: '123, 456, 789' (comma separated)
* (optional) user_ids: '321, 654, 987' (comma separated)

Example:

(data is returned in default - XML format, for JSON data format add ...rates**/format/json/**api_token... in request url)

`https://www.timecamp.com/third_party/api/rates/api_token/a36cabi96bba83f826`

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

`https://www.timecamp.com/third_party/api/rates/api_token/a36cabi96bba83f826/task_ids/123,456/user_ids/321,654,987`

```json
{
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
```