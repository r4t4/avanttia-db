#!/usr/bin/env bash

# forcing the .env... sorry... there are many ways to skin a cat
source .env
# generate JavaScript
sequelize-auto -h $AVANTTIA_DB_HOST -d $AVANTTIA_DB_NAME -u $AVANTTIA_DB_USER -x $AVANTTIA_DB_PASS -p $AVANTTIA_DB_PORT  --dialect mysql -o ./js -C
# generate TypeScript
sequelize-auto -h $AVANTTIA_DB_HOST -d $AVANTTIA_DB_NAME -u $AVANTTIA_DB_USER -x $AVANTTIA_DB_PASS -p $AVANTTIA_DB_PORT  --dialect mysql -o ./ts -z -C
