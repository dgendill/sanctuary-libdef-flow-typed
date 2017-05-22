#!/bin/bash
pushd cli
node dist/cli.js run-tests "sanctuary"
popd
