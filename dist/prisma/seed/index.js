const run = async () => {
    await (await Promise.resolve().then(() => require('./002-user'))).default();
};
run();
//# sourceMappingURL=index.js.map