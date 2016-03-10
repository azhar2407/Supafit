module.exports = function(grunt) {

  grunt.initConfig({

    copy: {
      build: {
        cwd: 'source',
        src: [ '**', '!**/*.styl', '!**/*.coffee' ],
        dest: 'build',
        expand: true
      },
    },

  clean: {
    build: {
      src: [ 'build' ]
    },

    stylesheets: {
      src: [ 'build/stylesheets/*.css', '!build/application.css' ]
    },

    scripts: {
      src: [ 'build/scripts/*.js', '!build/application.js' ]
    },
  },


  stylus: {
    build: {
      options: {
        linenos: true,
        compress: false
      },
      files: [{
        expand: true,
        cwd: 'source',
        src: [ '**/*.styl' ],
        dest: 'build',
        ext: '.css'
      }]
    }
  },

  autoprefixer: {
    build: {
      expand: true,
      cwd: 'build',
      src: [ '**/*.css' ],
      dest: 'build'
    }
  },

  cssmin: {
    build: {
      files: {
        'build/application.css': [ 'build/stylesheets/*.css' ]
      }
    }
  },


  coffee: {
    build: {
      expand: true,
      cwd: 'source',
      src: [ '**/*.coffee' ],
      dest: 'build',
      ext: '.js'
    }
  },

  uglify: {
    build: {
      options: {
        mangle: false
      },
      files: {
        'build/application.js': [ 'build/scripts/*.js' ]
      }
    }
  },

  watch: {
    copy: {
      files: [ 'source/**', '!source/**/*.styl', '!source/**/*.coffee', '!source/**/*.jade' ],
      tasks: [ 'copy' ]
    },
    stylesheets: {
      files: 'source/**/*.styl',
      tasks: [ 'stylesheets' ]
    },
    scripts: {
      files: 'source/**/*.coffee',
      tasks: [ 'scripts' ]
    }
  }, 

  connect: {
    server: {
      options: {
        port: 4000,
        base: 'build',
        hostname: '127.0.0.1'
      }
    }
  },

  requirejs: {
    compile: {
      options: {
        baseUrl: "path/to/base",
        mainConfigFile: "path/to/config.js",
        out: "path/to/optimized.js"
      }
    }
  }
});


  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-requirejs');

  grunt.registerTask(
    'stylesheets', 
    'Compiles the stylesheets.', 
    [ 'stylus', 'autoprefixer', 'cssmin', 'clean:stylesheets']
  );

  grunt.registerTask(
    'scripts', 
    'Compiles the JavaScript files.', 
    [ 'coffee', 'uglify', 'clean:scripts' ]
  );

  grunt.registerTask(
    'build', 
    'Compiles all of the assets and copies the files to the build directory.', 
    [ 'clean:build', 'copy', 'stylesheets', 'scripts' ]
  );

  grunt.registerTask(
    'default', 
    'Watches the project for changes, automatically builds them and runs a server.', 
    [ 'build', 'connect', 'watch' ]
  );
};
