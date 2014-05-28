define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/page1.html',
    'text!templates/controls/petek.html',
    'views/base',
    'collections/apps'

], function ($, _, Backbone, appsTemplate, petekTemplate, BaseView, AppsCollection) {
    'use strict';

    var Page1View = BaseView.extend({

        el: $('#workspace'),

        template: _.template(appsTemplate),

        // The DOM events specific to an item.
        events: {

        },

        super: function (methodName, args) {
            BaseView.prototype[methodName].apply(this, args);
        },

        initialize: function (options) {
            this.model = new AppsCollection();
            this.super("initialize", [options]);

        },

        render: function (options) {
            var data,
                me = this;

            this.super("render", [options]);

            // Fetch Apps collection
            data = this.model.fetch({
                success: function(data) {

                    var  petekCompile, out,
                        appsData = (data ? data.toJSON() : undefined);

                    if (appsData) {
                        appsData.forEach(function(appData) {
                            petekCompile = _.template(petekTemplate),
                                out += petekCompile({
                                    "image": "",
                                    title: (appData.name || "NA"),
                                    description: "Description about the application",
                                    version: "Version 2.03"
                                });

                        });

                        $(me.el).find("#page #content").html(out);
                    }
                },

                error: function (err) {
                    console.error(err);

                }
            }).complete(function() {

            });

            return this;
        },

        transitionIn: function (writecallback, callback) {

            this.super("transitionIn", [writecallback, callback]);

        },

        transitionOut: function (writecallback, callback) {

            this.super("transitionOut", [writecallback, callback]);

        }

    });

    return Page1View;
});
