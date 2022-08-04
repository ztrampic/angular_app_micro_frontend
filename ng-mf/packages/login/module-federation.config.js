module.exports = {
  name: 'login',
  exposes: {
    './Module': 'packages/login/src/app/remote-entry/entry.module.ts',
  },
};
