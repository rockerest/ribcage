define(
    ["backbone", "underscore", "region"],
    function( Backbone, _, Region ){
        var Layout = function(){
            this._regions = {};
            this._presets = {};
            this._el = "";
            this._template = "";
            this._currentView = undefined;
        };

        Layout.prototype.addRegions = function( regions ){
            var self = this;

            _( regions ).each( function( selector, name ){
                self.addRegion( name, selector );
            });

            return this;
        };

        Layout.prototype.addRegion = function( name, selector ){
            this._regions[ name ] = selector;

            return this;
        };

        Layout.prototype.setElement = function( selector ){
            this._el = selector;

            return this;
        };

        Layout.prototype.setTemplate = function( html ){
            this._template = html;

            return this;
        };

        Layout.prototype.addPresets = function( presets ){
            var self = this;

            _( presets ).each( function( preset, name ){
                self._presets[ name ] = preset;
            });

            return this;
        };

        Layout.prototype.addPreset = function( name, renderable ){
            this._presets[ name ] = renderable;
        };

        Layout.prototype.render = function( layoutData ){
            var view = this.createView( this._el, this._template, layoutData, this._regions ),
                self = this;

            this._currentView = new view();
            this.regions = this._regions;

            _( this._presets ).each( function( renderable, name ){
                self.regions[ name ].show( renderable.object, renderable.data );
            });

            return this;
        };

        Layout.prototype.createView = function( el, tmpl, layoutData, regions ){
            var self = this;

            return Backbone.View.extend({
                "el": el,
                "template": _.template( tmpl ),

                "render": function(){
                    this.$el.html( this.template( layoutData ) );
                    self.createRegions( regions, this.$el );

                    return this;
                },

                "initialize": function(){
                    this.render();
                }
            });
        };

        Layout.prototype.createRegions = function( regions, parent ){
            var self = this;

            _( regions ).each( function( selector, name ){
                self._regions[ name ] = new Region( parent, selector );
            });
        };

        return Layout;
    }
);
