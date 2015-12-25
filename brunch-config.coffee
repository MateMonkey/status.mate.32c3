exports.config =
  files:
    javascripts:
      defaultExtension: 'js'
      joinTo:
        'js/app.js': /^app\/js/
        'js/vendor.js': /^bower_components/
      order:
        before: [
          'app/js/application.js'
          'bower_components/angular/angular.js'
        ]
    stylesheets:
      joinTo:
        'css/app.css': 'app/styles/application.less'
        'css/vendor.css': /^bower_components/
    templates:
      joinTo: 'app.js'
  modules:
    wrapper: false
    definition: false
  conventions:
    ignored: (path) -> /^bower_components\/(bootstrap|jquery)\//.test path
