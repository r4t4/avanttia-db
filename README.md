# db

Avanttia DB as an import for [Sequelize](https://sequelize.readthedocs.io/en/v3/).

## Prerequsites

```
npm install -g mysql
npm install -g sequelize-auto
```

## Usage

```
npm run generate
```

From the [Sequelize documentation](http://docs.sequelizejs.com/manual/tutorial/models-definition.html#import)

```
// in your server file - e.g. app.js
const Project = sequelize.import(__dirname + "/path/to/models/project")

// The model definition is done in /path/to/models/project.js
// As you might notice, the DataTypes are the very same as explained above
module.exports = (sequelize, DataTypes) => {
  return sequelize.define("project", {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  })
}
```