define(
    ["underscore"],
    function( _ ){
        var Region = function( parent, selector ){
            this.output = parent.find( selector );
            this.view = undefined;
            
            this._isRendered = false;
            this._renderable = undefined;
            this._viewData = {};
            
            this.hasRegions = function(){
                return this.view && _( this.view ).has( "_regions" );
            };
        };
        
        Region.prototype.remove = function(){
            if( this._isRendered ){
                if( this.hasRegions() ){
                    this.view.remove();
                }
                else{
                    this.view.stopListening();
                    this.view.$el.empty();
                }
                
                this._isRendered = false;
            }
        };
        
        Region.prototype.render = function(){
            var self = this,
                layout;
            
            this.remove();
            
            this._renderable.prototype.el = this.output;
            this._renderable.prototype.getRegion = function(){
                return self;
            };
            
            this.view = new this._renderable( this._viewData );
            this._isRendered = true;
            
            if( this.hasRegions() ){
                this.view.setElement( this.output );
                layout = this.view.render();
                
                this.regions = layout.regions;
            }
        };
        
        Region.prototype.show = function( renderable, optionalViewData ){
            this._renderable = renderable;
            this._viewData = optionalViewData;
            
            this.render();
        };
        
        Region.prototype.intercostal = function( view, selector ){
            var el = this.output.find( selector ),
                element;
            
            if( el.length > 0 ){
                element = el[0];
                
                if( view.$el ){
                    view.setElement( element );
                }
                else{
                    view.prototype.el = element;
                }
            }
            else{
                throw new Error( "The selector '" + selector + "' did not select any elements." );
            }
            
            return view;
        };

        return Region;
    }
);
