define([
  'backbone.marionette',
  'hbs!../templates/roadmap'
],

function(Marionette, template) {
  'use strict';

  return Marionette.LayoutView.extend({
    template: template
  });
});
