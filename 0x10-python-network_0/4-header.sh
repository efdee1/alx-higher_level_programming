#!/bin/bash
# curl sends GET req to URL, displays response body
curl -s -X GET -H "X-School-User-Id: 98" "$1"
