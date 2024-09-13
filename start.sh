#!/bin/bash

function parallel_run {
    local PID_LIST=""

    for cmd in "$@"; do {
      echo "Process \"$cmd\" started";
      $cmd & pid=$!
      PID_LIST+=" $pid";
    } done

    # shellcheck disable=SC2064
    trap "kill $PID_LIST" SIGINT

    echo "Parallel processes have started";

    wait "$PID_LIST"

    echo
    echo "All processes have completed";
}


open http://localhost:8000

parallel_run "npm run watch" "./vendor/bin/jigsaw serve"

kill -9 $(sudo lsof -iTCP -sTCP:LISTEN -n -P | grep 8000  | awk '{print $2}')
