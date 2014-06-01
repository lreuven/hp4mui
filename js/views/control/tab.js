define([
    'jquery'

], function ($) {

    'use strict';

    var _module;

    _module = function () {

        var _tab,
            _tabItems,
            _tabContentItems,
            _indicator;

        return {

            init: function (config) {
                var tabcontainer,
                    tabcontent,
                    me = this,
                    counter=0;

                if (config) {
                    _tab = (config.elt || $(config.query));
                    if (_tab) {
                        if (!_tabItems) {
                            tabcontainer = _tab.find("._tabcontainer");
                            tabcontent = _tab.find("._tabcontent"),
                            _indicator = tabcontainer.find(".indicator");

                            if (tabcontainer) {
                                _tabItems = [];
                                _tabContentItems = [];
                                counter=0;
                                tabcontainer.children().each(function () {
                                    _tabItems.push($(this));
                                    $(this).prop("_index", counter);
                                    $(this).on("click", function() {
                                        me.selected({elt: $(this)});
                                    });
                                    counter++;
                                });
                                tabcontent.children().each(function () {
                                    _tabContentItems.push($(this));
                                });
                            }
                        }

                        this.selected({
                            index: config.selected
                        });
                    }
                }
            },

            selected: function (config) {

                var index = ("index" in config ? config.index : undefined),
                    elt = ("elt" in config ? config.elt : undefined),
                    counter= 0, tabItemSpan;

                if (config) {

                    if (elt !== undefined) {
                        index = elt.prop("_index");
                    }
                    _tabContentItems.forEach(function (item) {
                        var tabItem = _tabItems[counter];
                        if (counter === index) {
                            item.css("opacity", "1");
                            tabItem.css("opacity", "1");

                            tabItemSpan = tabItem.find("span")[0];
                            _indicator.css({left: (tabItemSpan.getBoundingClientRect().left-120)});
                            _indicator.css({width: (tabItemSpan.getBoundingClientRect().width)});
                        } else {
                           item.css("opacity", "0");
                           tabItem.css("opacity", "0.6");
                        }
                        counter++;
                    });
                }
            }
        }
    };

    return _module;
});

