import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  faPlus, faTrash, faPencilAlt, faToggleOn,
  faCaretDown, faCaretRight, faCheck, faSortUp, 
  faSortDown, faSort, faArrowUp, faArrowDown, faLevelUpAlt, faThumbsDown
} from '@fortawesome/free-solid-svg-icons';

export interface OptionType {
  enableAddDelete?: boolean,
  enableMove?: boolean,
  showNodeId?: boolean,
  titleKey?: string,
  defaultNodeName?: string
}
interface ItemsType { [key: string]: any }[]
interface ItemType { [key: string]: any }

@Component({
  selector: 'zak-ng-tree',
  templateUrl: 'zak-ng-tree.component.html',
  styleUrls: ['zak-ng-tree.component.scss']
})
export class ZakNgTreeComponent implements OnInit {

  defOptions: OptionType = {
    enableAddDelete: false,
    enableMove: false,
    showNodeId: false,
    titleKey: 'title',
    defaultNodeName: 'Node'
  };

  @Input() items?: any;
  @Input() options: OptionType = this.defOptions;
  @Output() onChange: EventEmitter<object> = new EventEmitter();

  faPlus = faPlus;
  faTrash = faTrash;
  faPencilAlt = faPencilAlt;
  faToggleOn = faToggleOn;
  faCaretDown = faCaretDown;
  faCaretRight = faCaretRight;
  faCheck = faCheck;
  faSortUp = faSortUp;
  faSortDown = faSortDown;
  faSort = faSort;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  faLevelUpAlt = faLevelUpAlt;

  enableEdit = false;
  enableEditIndex = null;

  constructor() { }

  ngOnInit(): void {
    this.searchNode(this.items);
    this.options = !Object.keys(this.options).length ? this.defOptions : this.options;
  }

  searchNode(items: ItemsType, nodeIdParent?: any) {
    for (let [index, element] of items.entries()) {
      const nodeSubId = index + 1;
      const nodeId = nodeIdParent ? `${nodeIdParent}.${nodeSubId}` : `${nodeSubId}`
      element['zakNgId'] = nodeId;
      if (element.children) {
        this.searchNode(element.children, nodeId)
      }
    }
  }

  addNode(items?: ItemsType, item?: ItemType) {
    const nodeName = this.options?.defaultNodeName || this.defOptions.defaultNodeName;
    if (items && item) {
      item.children = item.children || []
      item.children.push({
        title: nodeName
      })
      item.zakNgHide = false;
      item.children.map((i: any) => i.zakNgEdit = false);
      const lastElem = item.children[item.children.length - 1];
      lastElem['zakNgEdit'] = true;
    } else {
      this.items.push({
        title: nodeName
      })
      this.items.map((i: any) => i.zakNgEdit = false);
      const lastElem = this.items[this.items.length - 1];
      lastElem['zakNgEdit'] = true;
    }
    this.searchNode(this.items)
  }

  editNode(items: ItemsType, item: ItemType) {
    const arrElem = items.find((i: any) => item.zakNgId == i.zakNgId);
    arrElem['zakNgEdit'] = true;
  }

  saveNode(items: ItemsType, item: ItemType) {
    const arrElem = items.find((i: any) => item.zakNgId == i.zakNgId);
    //const eventName = arrElem['zakNgEdit'] ? "updated" : "added";
    arrElem['zakNgEdit'] = false;

    const outData = {
      event: 'saved',
      items: this.formattedItems(this.items),
      item: this.formattedItems([item])[0]
    }
    this.onChange.emit(outData);
  }

  deleteNode(items: ItemsType, item: ItemType) {
    const arrIn = items.findIndex((i: any) => item.zakNgId == i.zakNgId);
    if (arrIn != -1) {
      items?.splice(arrIn, 1);
    }
    this.searchNode(this.items)

    const outData = {
      event: 'deleted',
      items: this.formattedItems(this.items),
      item: this.formattedItems([item])[0]
    }
    this.onChange.emit(outData);
  }

  toggleNode(item: ItemType) {
    item.zakNgHide = !item.zakNgHide
  }

  moveNodeUp(items: ItemsType, item: ItemType) {
    const arrIn = items.findIndex((i: any) => item.zakNgId == i.zakNgId);
    if (arrIn > 0 && items[arrIn - 1]) {
      items[arrIn] = items[arrIn - 1];
      items[arrIn - 1] = item;
    }
    this.searchNode(this.items)

    const outData = {
      event: 'movedUp',
      items: this.formattedItems(this.items),
      item: this.formattedItems([item])[0]
    }
    this.onChange.emit(outData);
  }

  moveNodeDown(items: ItemsType, item: ItemType) {
    const arrIn = items.findIndex((i: any) => item.zakNgId == i.zakNgId);
    if (items[arrIn + 1]) {
      items[arrIn] = items[arrIn + 1];
      items[arrIn + 1] = item;
    }
    this.searchNode(this.items)

    const outData = {
      event: 'movedDown',
      items: this.formattedItems(this.items),
      item: this.formattedItems([item])[0]
    }
    this.onChange.emit(outData);
  }

  selectNodeTitle(item: ItemType){
    const outData = {
      event: 'selected',
      items: this.formattedItems(this.items),
      item: this.formattedItems([item])[0]
    }
    this.onChange.emit(outData);
  }

  formattedItems(items: ItemsType) {
    const newItems = JSON.parse(JSON.stringify(items))
    const outputData = this.outputItem(newItems);
    return outputData;
  }

  outputItem(items: ItemsType) {
    for (let [index, element] of items.entries()) {
      delete element['zakNgId'];
      delete element['zakNgEdit'];
      delete element['zakNgHide']
      if (element.children) {
        this.outputItem(element.children)
      }
    }
    return items;
  }
}
