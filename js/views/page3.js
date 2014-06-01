define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/page3.html',
    'views/base',
    'views/control/tab'

], function ($, _, Backbone, appsTemplate, BaseView, Tab) {
    'use strict';

    var Page3View = BaseView.extend({

        el: $('#workspace'),

        template: _.template(appsTemplate),

        // The DOM events specific to an item.
        events: {

        },

        refs: {

        },

        super: function(methodName, args) {
            BaseView.prototype[methodName].apply(this, args);
        },

        initialize: function (options) {
            this.super("initialize",[options]);

        },

        render: function (options) {
            var me = this,
                content,
                tab;

            this.super("render",[options]);

            content = $(me.el).find("#page #content");
            if (content) {
                tab = new Tab();
                tab.init({
                    elt: content.find("._tab"),
                    selected:0
                });
            }

            return this;
        },

        transitionIn: function (writecallback, callback) {

            this.super("transitionIn",[writecallback, callback]);

        },

        transitionOut: function (writecallback, callback) {

            this.super("transitionOut",[writecallback, callback]);

        }

    });

    return Page3View;
});
