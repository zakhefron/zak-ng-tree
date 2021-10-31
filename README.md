# zak-ng-tree Angular Tree Component

Angular component to create & display tree

## Getting started
## Install

```sh
npm install zak-ng-tree
```

## Usage

### Module

```typescript
import { ZakNgTreeModule } from '@zakhefron/zak-ng-tree';
....
...
imports: [
    ....,
    ZakNgTreeModule
]
```

### Html

```html
<zak-ng-tree [items]="items" [options]="options" (onChange)="onChange($event)"></zak-ng-tree>
```
##### Input ######
`[items]` => array of objects with `title` & `children` property 
`[options]` => object 
    {
    enableAddDelete: true,
     enableMove: true,
     showNodeId: true,
     titleKey : 'title', 
     defaultNodeName: 'Node'
     }
| Property |  Type |  Description |
| --- | ----------- | ----------- |
| enableAddDelete | Boolean | To enable add, edit, delete nodes |
| enableMove | Boolean|To enable nodes to move up / down |
| showNodeId |  Boolean | To show node id|
| titleKey |  string  | Node title to display. Property of object inside Items Array. (Default: 'title')|
| defaultNodeName |  string  | Default node name to display on creation |
##### Output ######
`onChange($event)` output emits object with three property (event, items, item)
| Property |  Type |  Description |
| --- | ----------- | ----------- |
| event | string |selected / saved / movedUp / movedDown |
| items | array of object |whole array of object |
| item |  object|current item|

## Sample Code
### app.module.ts

```typescript
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ZakNgTreeModule } from '@zakhefron/zak-ng-tree';

@NgModule({
  declarations: [AppComponent],
  imports: [
      BrowserModule, 
      ZakNgTreeModule
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### app.component.html

```html
<zak-ng-tree [items]="items" [options]="options" (onChange)="onChange($event)"></zak-ng-tree>
```

### app.component.ts

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  
    options = {
        enableAddDelete: true,
        enableMove: true,
        showNodeId: true,
        titleKey : 'title',
        defaultNodeName: 'Test'
   };

  listItem = [
    {
      title: "Parent 1",
      children : [
        {
          title: "Child 1"
        },{
          title: "Child 2",
          children: [
            {
              title: "Grandchild 1"
            },{
              title: "Grandchild 2"
            }
          ]
        },{
          title: "Child 3"
        }
      ]
    },
    {
      title: "Parent 2"
    }
  ]

  onChangeNode(event:{}){
    console.log("Event",event)
  }
}
```
