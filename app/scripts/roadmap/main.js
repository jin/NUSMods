define(['require', 'app', 'backbone.marionette'],
  function (require, App, Marionette) {
    'use strict';

    var navigationItem = App.request('addNavigationItem', {
      name: 'Roadmap',
      icon: 'table',
      url: '/roadmap'
    });

    var controller = {
      showRoadmap: function () {
        require(['./views/RoadmapView'],
          function (RoadmapView) {
            navigationItem.select();
            App.mainRegion.show(new RoadmapView());
          });
      }
    };

    App.addInitializer(function () {
      new Marionette.AppRouter({
        controller: controller,
        appRoutes: {
          'roadmap': 'showRoadmap'
        }
      });
    });
  });
