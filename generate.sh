#!/usr/bin/env bash

javascript="./js"
typescript="./ts"

rm -fR $javascript $typescript
mkdir -p $javascript $typescript

# forcing the .env... sorry... there are many ways to skin a cat
source .env
# generate JavaScript
sequelize-auto -h $AVANTTIA_DB_HOST -d $AVANTTIA_DB_NAME -u $AVANTTIA_DB_USER -x $AVANTTIA_DB_PASS -p $AVANTTIA_DB_PORT  --dialect mysql -o ./js
# generate TypeScript
sequelize-auto -h $AVANTTIA_DB_HOST -d $AVANTTIA_DB_NAME -u $AVANTTIA_DB_USER -x $AVANTTIA_DB_PASS -p $AVANTTIA_DB_PORT  --dialect mysql -o ./ts -z

# construct a JavaScript index with all the tables
index="$javascript/index.js"
# clean it up
truncate -s 0 $index

# create the JS file
echo "module.exports = (sequelize) => {" >> $index
echo "  return {" >> $index
for js in $javascript/*.js; do
  model=$( echo $js | cut -d '/' -f 3 | cut -d '.' -f 1 )
  echo "    $model: sequelize.import('$model', require('./$model'))," >> $index
  #echo "  $model: require('./$model')," >> $index
done
echo "  };" >> $index
echo "};" >> $index

echo 'all good... ciao'
