# extjs-gear
Plugin to add a container to extjs panel

### Example

[Gear Plugin](https://fiddle.sencha.com/#view/editor&fiddle/2fe0 "Sencha Fiddle")

### Installation

* Checkout the repository
* Create the ExtJS application:
```sh
$ sencha -sdk /path/to/extjs generate app Gear ./
```
* Add plugin to requieres statement in ./Gear/view/main/List.js
```javascript
requires: [
        'Gear.store.Personnel',
        'Gear.ux.GearPlugin'
    ]
```
* Configure plugin in ./Gear/view/main/List.js
```javascript
    plugins: [
        {
            ptype: 'gearPlugin',
            dockHeight: 80
        }
    ]
```

* Navigate to ./ and run: `sencha app build`
* Once the build completes, run: `sencha app watch`
* Open localhost:1841 in a browser

