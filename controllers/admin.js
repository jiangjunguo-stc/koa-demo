// todo API

module.exports = {
  // test
  test: async (ctx, next) => {
    ctx.body = {
      'key': 'helloword'
    }
  }
}