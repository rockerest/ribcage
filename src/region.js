define(
    ["underscore"],
    function( _ ){
        var Region = function( parent, selector ){
            this.output = parent.find( selector );
            
            this._isRendered = false;
            this._renderable = undefined;
            this._viewData = {};
        };
        
        Region.prototype.render = function(){
            this._renderable.prototype.el = this.output;
            
            var regionRenderable = new this._renderable( this._viewData ),
                layout;
            
            this._isRendered = true;
            
            if( _( regionRenderable ).has( "_regions" ) ){
                regionRenderable.setElement( this.output );
                layout = regionRenderable.render();
                
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
            
            if( !this._isRendered ){
                throw new Error( "Intercostal views will not work until this region has been rendered." );
            }
            
            if( el.length > 0 ){
                element = el[0];
            }
            
            if( view.$el ){
                view.setElement( element );
            }
            else{
                view.prototype.el = element;
            }
            
            return view;
        };

        return Region;
    }
);
