# ribcage


Unopinionated Layouts and Regions for Backbone.

## Terminologies

`Renderable` - Essentially a Backbone View. Can also be an instance of Ribcage (which is itself a Backbone View).  
`Region` - A (moderately) simple wrapper around a renderable.

# Layouts

A layout is a specification for a set of related, heirarchical regions.

## API

### `new Ribcage()`

Construct a new instance. Considered a `layout`.

```
var layout = new Ribcage();
```

----
### `.setElement( selector )`
Set the parent element to attach the layout to. The selector should return a single element.

Most useful for a top-level layout that is not itself within a region.

Any layouts within a region should not use `.setElement` and instead use region selectors (see `.addRegions`, below).

Example:

```
layout.setElement( 'body' );
```
----
### `.addRegions( regions )`
Assign a list of regions to a layout. `regions` should be an object with region names as keys and css selectors that define the DOM element to attach the region to. Selectors should return a single DOM element.

```
var regions = {
    'page': '#page'
};

layout.setRegions( regions );
```

----
### `.addRegion( name, selector )`
Assign a region to a selector. Identical to a single key:value pair of `regions` defined in `.addRegions`.

```
layout.setRegion( 'page', '#page' );
```

----
### `.setTemplate( template )`
Set the template that represents the layout. `template` should be an HTML string.

```
var html = '<div id="page"></div>';

layout.setTemplate( html );
```

----
### `.addPresets( presets )`
Set a list of presets for the layout. Useful when one region may be static, like headers or footers. Also useful for attaching other layouts as the content of a region.

Presets should be a list of key:value pairs. The keys should be region names, and the values should be objects with the definition: `{"object": renderable, "data": [any valid JSON data] }`.

The `data` component of a present is passed directly to the initialize method of the renderable.

```
var userSubscription = {
    'components': [
        "home",
        "pro",
        "gold",
        "platinum"
    ]
}

var regions = {
    'navigation': 'nav',
    'header': 'nav + header',
    'main': '#main'
};

var presets = {
    "navigation": {
        "object": NavigationView,
        "data": {
            // Could be used - for example - to determine which menu items to show
            "enabledComponents": userSubscription.components
        }
    },
    "header": {
        "object": PageHeaderLayout
    }
};

layout
    .addRegions( regions )
    .addPresets( presets );
```

----

### `.addPreset( name, renderable )`
Assign a preset to a region. Identical to a single key:value pair of `presets` defined in `.addPresets`.

```
layout.addPreset( 'header', {
    "object": PageHeaderLayout
} );
```

---

### `.render()`
Construct the view representing this layout and assign the defined regions to it. If any presets are defined, construct them and attach them to this view.

```
layout.render();
```

----

### `.remove()`
Calls remove on all of it's children Regions' renderables. If they are Ribcage Layouts, this same method on that layout is called.

```
layout.remove();
```

---

### `.explore( path )`
*`.render()` must have been called prior to using explore.*

Returns a Region as selected by `path`.

`path` should be defined as a `.`- or `:`-separated list of regions. Each separated node is sequentially requested from the prior parent, beginning at the layout `.explore` is called on. Separators can be mixed.

```
var menuLayout = new Ribcage();

menuLayout
    .setRegions( {
        'main': '.main-menu',
        'secondary': '.sub-menu'
    } )
    .setTemplate( '<div class="main-menu"></div><div class="sub-menu"></div>' );

var headerLayout = new Ribcage();

headerLayout
    .setRegions( {
        'logo': '.logo',
        'menu': 'nav',
    } )
    .addPresets( {
        'logo': LogoView,
        'menu': menuLayout
    } )
    .setTemplate( '<div class="logo"></div><nav></nav>' );

var mainLayout = new Ribcage();

mainLayout
    .setRegions( {
        'header': 'header',
        'page': '#page'
    } )
    .addPresets( {
        'header': headerLayout
    } )
    .setTemplate( '<header></header><div id="page"></div>' )
    .setElement( 'body' );

mainLayout.render();

var mainMenuRegion = mainLayout.explore( 'header.menu:main' );
```

# Regions

A region is a simple wrapper around a renderable.

## API

### `.render`
Renders the region defined by a renderable using any optional data into the element as provided by the selector in the layout definition. Probably doesn't need to be called manually. `.show` or `.update` are more useful.

```
var originalRender = mainMenuRegion.render;
mainMenuRegion.prototype.render = function(){};

mainMenuRegion.show( MainMenuView );

mainMenuRegion.prototype.render = originalRender;
mainMenuRegion.render(); // given the above definition, will place MainMenuView at path "header:menu:main" which would resolve to the CSS selector "body header nav .main-menu".
```

----

### `.show( renderable, data )`
Places `renderable` into the region and assigns `data` to the region. Calls `.render` on the region, which constructs the view for the region from the `renderable` passing `data` into it's `initialize`. Subsequently assigns any potential regions if `renderable` is a layout.

`data` is optional.

```
mainMenuRegion.show( MainMenu, { 'items': { "Home": "/", "Pricing": "/pricing" } } );
```

----

### `.update( data )`
If the region contains a View, this calls `.render` with `data` as the parameter.

`data` is optional.

```
mainMenuRegion.update();
```

----

### `.remove()`
Calls `.remove` on this region's renderable. If the renderable is a layout, `layout.remove()` is called. If the renderable is a more traditional Backbone View, it's events are unbound and it's parent element is emptied.

This allows a new renderable to be placed in the same location. It also leaves the removal of container nodes to the layout that originally held them. This has the additional effect of leaving the topmost node (`body`, for example) in place. This is considered a feature.

```
mainMenuRegion.remove();
```
