# titanium-address-input
[![Build status](https://ci.appveyor.com/api/projects/status/t2n1whcpamse2sy9/branch/master?svg=true)](https://ci.appveyor.com/project/aarondrabeck/titanium-address-input/branch/master)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/LssPolymerElements/titanium-address-input)

To install use: `bower install --save titanium-address-input`

[ LIVE DEMO AND API ](https://www.webcomponents.org/element/LssPolymerElements/titanium-address-input)

```html
        <h3>Titanium Address Input Demo</h3>

        <style>
        .app-drawer {
               height: 100%;
               overflow: auto;
           }
        </style>
        <app-drawer-layout fullbleed>
             <!-- Drawer content -->
             <app-drawer id="drawer">
               <div class='app-drawer'>
                    <app-toolbar><img src="/images/Leavitt-Group-Bw.png" alt="Leavitt Group"></app-toolbar>
                    <titanium-address-input roles="[[roles]]" page="[[page]]" id="addressInput"></titanium-address-input>
                </div>
             </app-drawer>

        When using a different app-routing system on a stand a lone url you can simply replace the page tag with the name.
                    <titanium-address-input roles="[[roles]]" page="sample-app" id="LssManageAppDrawer"></titanium-address-input>
        
        
```
