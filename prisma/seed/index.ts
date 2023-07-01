const run = async () => {
  await (await import('./002-user')).default();
};

run();
