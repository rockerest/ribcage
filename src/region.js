define(
    ["underscore"],
    function( _ ){
        var Region = function( parent, selector ){
            this.output = parent.find( selector );

            this._renderable = undefined;
            this._viewData = {};
        };

        Region.prototype.render = function(){
            this._renderable.prototype.el = this.output;

            var regionRenderable = new this._renderable( this._viewData ),
                layout;

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

        return Region;
    }
);
