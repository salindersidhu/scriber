const fs = require('fs');
const path = require('path');
const NodeEnvironment = require('jest-environment-node');

const dbConfigPath = path.join(__dirname, 'db.config.json');

class MongoEnvironment extends NodeEnvironment {
    constructor(config) {
        super(config);
    }

    async setup() {
        const globalConfig = JSON.parse(fs.readFileSync(dbConfigPath, 'utf-8'));
        this.global.__MONGO_URI__ = globalConfig.mongoUri;
        this.global.__MONGO_DB_NAME__ = globalConfig.mongoDBName;
        await super.setup();
    }

    async teardown() {
        await super.teardown();
    }

    runScript(script) {
        return super.runScript(script);
    }
}

module.exports = MongoEnvironment;
