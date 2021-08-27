#!/bin/bash

osascript -e 'quit app "Sketch"'
sleep .5
open "$1"
