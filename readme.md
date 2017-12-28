[![Build Status](https://travis-ci.org/o-rango/orango-demo-tools.svg?branch=master)](https://travis-ci.org/o-rango/orango-demo-tools)
[![Coverage Status](https://coveralls.io/repos/github/o-rango/orango-demo-tools/badge.svg?branch=master)](https://coveralls.io/github/o-rango/orango-demo-tools?branch=master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/1deb8aa719ba4df0be9a650626dc7340)](https://www.codacy.com/app/romulocintra/orango-demo-tools?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=o-rango/orango-demo-tools&amp;utm_campaign=Badge_Grade)


# o-rango: o-demo-bar  (WIP)

o-demo-bar is a simple and flexible  demo bar component for development and showcase your components , heavily  inspired in [storybook.js.org](https://storybook.js.org) having the main goal  to work directly with all JS  frameworks , being based in web component standards and built with stenciljs.

### Initial working version
![](./o-demo-bar.gif)

## Install

### Script tag

- Put a script tag similar to this ``` <script src="https://unpkg.com/@o-rango/orango-demo-tools/dist/orango-demo-tools.js"></script>``` in the head of your index.html
- Then you can add o-demo-case tags in your code 

### Node Modules
- Run ```npm install o-rango/orango-demo-tools --save-dev```
- Put a script tag similar to this ```<script src='@o-rango/orango-demo-tools/dist/orango-demo-tools.js'></script>``` in the head of your index.html
- Then you can add o-demo-case tags in your code


## Usage 

### Simple usage with no dependencies and 2 demo cases

after include o-demo-tools in your index.html you can start building your demos using the following code and add script tags for your demos 

```html
    <o-demo-bar name="Material Demo">
         <o-demo-case name="Buttons Click">
           <button onClick="showMe(event)">click me </button>
              <script> 
                  function showMe(evt){
                      alert(evt);
                  }
              </script>
         <o-demo-case>

        <o-demo-case name="Buttons Alert">
           <button onClick="showMe(event)">click me </button>
              <script> 
                  function showMe(evt){
                      alert(evt);
                  }
              </script>
         <o-demo-case>
    </o-demo-bar>
```
###  Using custom script imports 

If you want to have extra dependencies inside each demo you should include each dependency using : ```<!--includes (your scripts) includes--> ```

```html
    <o-demo-bar name="Material Demo">
         <o-demo-case name="Buttons Click">
          <!--includes 
          <script src="https://cdnjs.cloudflare.com/ajax/libs/preact/8.2.7/preact.min.js"></script> 
          <script src=" https://cdnjs.cloudflare.com/ajax/libs/bootstrap-material-design.css"></script> 
          includes-->
           <button onClick="showMe(event)">click me </button>
              <script> 
                  function showMe(evt){
                      alert(evt);
                  }
              </script>
         <o-demo-case>
          ... all your demo cases 
    </o-demo-bar>
```


###  Listen events from your components

If you want o-demo-bar to listen certain events from your components just add the your events in events attribute and a toast will show the payload of event when is triggered

```html
    <o-demo-bar name="Material Demo" events="myEvents,myAnotherEvent">
    </o-demo-bar>
```

## RoadMap / Todo's

* Add resizer options for mobiles using  [Marvel Devices](https://marvelapp.github.io/devices.css/)
* Fix and improve desktop resizer inspired in [Resizer](https://material.io/resizer/#device=window&url=https%3A%2F%2Fwww.android.com%2F&width=840)
* Add posibility to change background color and patterns in context menu 
* Store Preferences in localstorage 
* Show Code panel


## Contributing

We welcome contributions to O-RANGO projects!

-   ⇄ Pull requests and ★ Stars are always welcome.

