var _ = require("lodash");

var users = [
        { id: 22, username: "martin", active: true},
        { id: 23, username: "max",    active: false},
        { id: 24, username: "linda",  active: false}
    ]

var worker = function(users) {
    return _.where(users, { active: true });
};

// export the worker function as a nodejs module
module.exports = worker;

console.log(worker(users));
