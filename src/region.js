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
                    this.view.undelegateEvents();
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
        
        Region.prototype.update = function( optionalViewData ){
            if( this._isRendered && !this.hasRegions() ){
                this.view.render( optionalViewData );
            }
            else if( this._isRendered ){
                throw new Error( "A layout is rendered into this region. Please select a child region to update." );
            }
            else{
                throw new Error( "The view in this region is not rendered. Please construct a view in this region before attempting to refresh." );
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
