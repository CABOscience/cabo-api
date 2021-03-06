#!/bin/sh
# wait-for-postgres.sh

set -e

host="$1"
shift
cmd="$@"

until psql -h $PG_HOST -U $PG_USER -c '\q'; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 10
done

>&2 echo "Postgres is up - executing command"
exec $cmd
