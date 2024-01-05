function me() {
  console.log("me");
}

function me2() {
  console.log("me2");
}

// exports.me = me;
// exports.me2 = me2;

// module.exports = '1234'

module.exports = { me: me, me2: me2 };

// exports = module.exports = {}


