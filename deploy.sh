#!/usr/bin/env bash
set -o errexit -o nounset -o pipefail

USER=hamana.nl
HOST=hamana.nl
PORT=22141
DIR=/httpdocs/

hugo --cleanDestinationDir

rsync \
	--verbose \
	--archive \
	--compress \
	--delete \
	--rsh "ssh -p $PORT" \
	public/ \
	"${USER}@${HOST}:${DIR}"

exit 0
