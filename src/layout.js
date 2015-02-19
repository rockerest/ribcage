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
        
        Layout.prototype.remove = function(){
            _( this.regions ).each( function( region ){
                if( region._isRendered ){
                    region.view.remove();
                    region._isRendered = false;
                }
            });
        };

        Layout.prototype.explore = function( path ){
            if( !this.regions ){
                throw new Error( "The layout must be rendered in order to explore regions." );
            }
            else{
                var steps = path.split( /[\.:]/ ),
                    region = this,
                    count = 0,
                    name = "this layout";

                _( steps ).each( function( step ){
                    if( _( region ).has( "regions" ) ){
                        if( _( region.regions ).has( step ) ){
                            region = region.regions[ step ];
                        }
                        else{
                            throw new Error( '"' + step + '" is not a region inside "' + name + '".' );
                        }
                    }
                    else if( _( steps ).size() !== count ){
                        throw new Error( '"' + name + '" does not contain regions.' );
                    }

                    count++;
                    name = step;
                });

                return region;
            }
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
