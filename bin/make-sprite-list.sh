#!/bin/bash

for x in `ls resources/public/img/sprites/`;
	do echo -e "  \"img/sprites/$x\""
done
