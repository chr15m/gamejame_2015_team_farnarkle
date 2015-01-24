#!/bin/bash

if [ "$1" == "" ]
then
	echo "Please supply a namespace (static, pink, green, brown, baby)."
else
	for x in `ls resources/public/img/sprites/ | grep "^$1"`;
		do echo -e "  \"img/sprites/$x\""
	done
fi
