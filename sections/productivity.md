Productivity
======

GET /productivity
----------

Get productivity.

GET parameters:
* from: 2014-04-06 (__required__)
* to: 2014-04-07 (__required__)
* users_id: 640, 231, 123 (optional)

Example:
`https://www.timecamp.com/third_party/api/productivity/format/json/api_token/a36cabi96bba83f826?from=2014-04-06&to=2014-04-07&users_id=640,231,123`
```json
[
  {
    "userId": 640,
    "date": "2014-04-06",
    "productiveTime": 731,
    "unproductiveTime": 483,
    "neutralTime": 336
  },
  {
    "userId": 640,
    "date": "2014-04-07",
    "productiveTime": 433,
    "unproductiveTime": 14,
    "neutralTime": 55
  }
]
```