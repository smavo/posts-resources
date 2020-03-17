import * as configcat from "configcat-js";

const logger = configcat.createConsoleLogger(3); // Setting log level to 3 (Info)

function create(onChangeConfig) {
    const { REACT_APP_CONFIG_CAT_KEY } = process.env;
    return configcat.createClientWithAutoPoll(REACT_APP_CONFIG_CAT_KEY, {
        logger,
        configChanged: onChangeConfig,
    });
}

export default {
    create,
}