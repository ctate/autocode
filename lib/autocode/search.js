// Generated by CoffeeScript 1.10.0
(function() {
  var request, search;

  request = require('request');

  search = function(opts) {
    var crystal, name;
    crystal = this;
    if (typeof opts === 'object') {
      if (opts._ && opts._[1]) {
        name = opts._[1];
      } else if (opts.name) {
        name = opts.name;
      }
    } else if (typeof name === 'string') {
      name = opts;
    }
    if (!name) {
      throw new Error("'name' is required for crystal search");
    }
    console.log("Searching for generators matching name (" + name + ")...");
    return request.get({
      qs: {
        name: "%" + name + "%"
      },
      url: crystal.url('api', 'modules')
    }, function(err, resp, body) {
      var i, len, mod, modules, results;
      if (err || resp.statusCode !== 200) {
        throw new Error('Search failed.');
      }
      modules = JSON.parse(body);
      console.log("Found " + modules.length + " generator(s)!");
      results = [];
      for (i = 0, len = modules.length; i < len; i++) {
        mod = modules[i];
        results.push(console.log("- " + mod.Collection.name + "." + mod.name));
      }
      return results;
    });
  };

  module.exports = search;

}).call(this);
