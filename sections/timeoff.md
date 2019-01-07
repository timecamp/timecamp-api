Timeoff
======

GET /timeoff
----------

Get timeoff.

GET parameters:
* from: 2014-03-07 (__required__)
* to: 2014-04-06 (__required__)
* users_id: 640, 231, 123 (optional)

Example:
`https://www.timecamp.com/third_party/api/timeoff/format/json/api_token/a36cabi96bba83f826?from=2018-01-01&to=2019-02-01&users_id=116152,116153,116154,116155,116156`
```json
[
  {
    "date": "2018-12-05",
    "user_id": "116156",
    "day_type": "holidays",
    "note": "Opis",
    "vacation_hours": 0,
    "working_time": 480
  }
]
```