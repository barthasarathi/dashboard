import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { GridsterComponent, IGridsterOptions, IGridsterDraggableOptions } from 'angular2gridster';

@Component({
  selector: 'app-home',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild(GridsterComponent) gridster: GridsterComponent;
  itemOptions = {
    maxWidth: 3,
    maxHeight: 4
  };

  widgets: Array<any> = [
    {
      x: 0, y: 0,
      w: 1, h: 2,
      wSm: 1, hSm: 1,
      wMd: 1, hMd: 2,
      wLg: 1, hLg: 1,
      wXl: 2, hXl: 2,
      dragAndDrop: true,
      resizable: true,
      title: 'Basic form inputs 1'
    },
    {
      x: 1, y: 0,
      w: 1, h: 2,
      wSm: 2, hSm: 1,
      wMd: 2, hMd: 1,
      wLg: 3, hLg: 1,
      wXl: 3, hXl: 1,
      dragAndDrop: true,
      resizable: true,
      title: 'Basic form inputs 2'
    },
    {
      x: 1, y: 1,
      w: 2, h: 1,
      wSm: 1, hSm: 2,
      wMd: 1, hMd: 2,
      wLg: 2, hLg: 1,
      wXl: 3, hXl: 1,
      dragAndDrop: true,
      resizable: true,
      title: 'Basic form inputs 3'
    },
    {
      x: 3, y: 1,
      w: 1, h: 2,
      wSm: 1, hSm: 2,
      wMd: 1, hMd: 2,
      wLg: 3, hLg: 1,
      wXl: 3, hXl: 1,
      dragAndDrop: true,
      resizable: true,
      title: 'Basic form inputs 4'
    },
    {
      w: 1, h: 2,
      wSm: 1, hSm: 2,
      wMd: 1, hMd: 2,
      wLg: 3, hLg: 1,
      wXl: 3, hXl: 1,
      dragAndDrop: true,
      resizable: true,
      title: 'Basic form inputs x'
    }
  ];
  gridsterOptions = {
    lanes: 2, // how many lines (grid cells) dashboard has
    direction: 'vertical', // items floating direction: vertical/horizontal/none
    floating: true, // default=true - prevents items to float according to the direction (gravity)
    dragAndDrop: true, // possible to change items position by drag n drop
    resizable: true, // possible to resize items by drag n drop by item edge/corner
    resizeHandles: {
      s: true,
      e: true,
      se: true
    },
    widthHeightRatio: 1, // proportion between item width and height
    lines: {
      visible: true,
      color: '#afafaf',
      width: 2
    },
    shrink: true,
    useCSSTransforms: true, // Uses CSS3 translate() instead of position top/left - significant performance boost.
    responsiveSizes: true, // allow to set different item sizes for different breakpoints
    responsiveView: true, // turn on adopting items sizes on window resize and enable responsiveOptions
    responsiveDebounce: 500,
    // ResponsiveOptions can overwrite default configuration with any option available for specific breakpoint.
    responsiveOptions: [
      {
        breakpoint: 'sm',
        lanes: 3
      },
      {
        breakpoint: 'md',
        minWidth: 768,
        lanes: 4,
        dragAndDrop: true,
        resizable: true
      },
      {
        breakpoint: 'lg',
        lanes: 6,
        dragAndDrop: true,
        resizable: true
      },
      {
        breakpoint: 'xl',
        minWidth: 1800,
        lanes: 8,
        dragAndDrop: true,
        resizable: true
      }
    ]
  };

  gridsterDraggableOptions: IGridsterDraggableOptions = {
    handlerClass: 'panel-heading'
  };

  constructor() { }

  ngOnInit() {

  }

}
