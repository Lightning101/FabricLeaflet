import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import {fabric} from "fabric";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  canvas : fabric.Canvas;
  mainDiv : HTMLElement; 


  ngOnInit(): void {
    
    
    this.canvas = new fabric.Canvas("mycanvas");
    let element = document.getElementById("main");
    this.canvas.setHeight(400);
    this.canvas.setWidth(300);
    /*element.addEventListener("click",(e)=>
    {
      console.log("clicked");
      console.log("child count "+element.childElementCount);
      e.stopPropagation();
      e.stopImmediatePropagation();
      element.childNodes[1].dispatchEvent(e);
      e.CAPTURING_PHASE;
      
    }, true);*/
    

    let rect =  new fabric.Rect({
      width: 10, height: 20,
      //left: 100, top: 100,
      fill: 'yellow',
      //angle: 30
    });
    this.canvas.add(rect);

    this.canvas.selection = false;
    const map = L.map('mapid').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    let ltln = L.latLng( 51.500867,-0.088974);
    let pos = map.latLngToContainerPoint(ltln);
    rect.left =  pos.x;
    rect.top = pos.y;
    rect.setCoords();

    this.canvas.on({
      'mouse:down': function(options) {
        if (options.target) {
          console.log(options.e.type);
          options.e.stopImmediatePropagation();
          options.e.preventDefault();
          map.dragging.disable();
          return false;
        }
      },
      'mouse:up': function(options) {
        if (options.target) {
          console.log(options.e.type);
          options.e.stopImmediatePropagation();
          options.e.preventDefault();
          map.dragging.enable();
          return false;
        }
      },
      'mouse:move': function(options) {
        if (options.target) {
          console.log(options.e.type);
          
          options.e.stopImmediatePropagation();
          options.e.preventDefault();
          
          return false;
        }
      },
      'mouse:dblclick': function(options) {
        if (options.target) {
         
          options.e.stopImmediatePropagation();
          options.e.preventDefault();
          return false;
        }
      },
      'mouse:wheel': function(options) {
        if (options.target) {
         
          options.e.stopImmediatePropagation();
          options.e.preventDefault();
          return false;
        }
      },
      'mouse:over': function(options) {
        if (options.target) {
         
          options.e.stopImmediatePropagation();
          options.e.preventDefault();
          return false;
        }
      },
      'mouse:out': function(options) {
        if (options.target) {
         
          options.e.stopImmediatePropagation();
          options.e.preventDefault();
          return false;
        }
      },
      'mouse:up:before': function(options) {
        if (options.target) {
         
          options.e.stopImmediatePropagation();
          options.e.preventDefault();
          return false;
        }
      },
      'mouse:down:before': function(options) {
        if (options.target) {
         
          options.e.stopImmediatePropagation();
          options.e.preventDefault();
          return false;
        }
      },
      'mouse:move:before': function(options) {
        if (options.target) {
         
          options.e.stopImmediatePropagation();
          options.e.preventDefault();
          return false;
        }
      },
      'dragover': function(options) {
        if (options.target) {
         
          options.e.stopImmediatePropagation();
          options.e.preventDefault();
          return false;
        }
      },
      'dragenter': function(options) {
        if (options.target) {
         
          options.e.stopImmediatePropagation();
          options.e.preventDefault();
          return false;
        }
      },
      'dragleave': function(options) {
        if (options.target) {
         
          options.e.stopImmediatePropagation();
          options.e.preventDefault();
          return false;
        }
      },
      'touch:gesture': function(options) {
        if (options.target) {
         
          options.e.stopImmediatePropagation();
          options.e.preventDefault();
          return false;
        }
      },
      'touch:drag': function(options) {
        if (options.target) {
         
          options.e.stopImmediatePropagation();
          options.e.preventDefault();
          return false;
        }
      },
      'touch:orientation': function(options) {
        if (options.target) {
         
          options.e.stopImmediatePropagation();
          options.e.preventDefault();
          return false;
        }
      },
      'touch:shake': function(options) {
        if (options.target) {
         
          options.e.stopImmediatePropagation();
          options.e.preventDefault();
          return false;
        }
      },
      'touch:longpress': function(options) {
        if (options.target) {
         
          options.e.stopImmediatePropagation();
          options.e.preventDefault();
          return false;
        }
      }
      
    });

    map.on("zoom",(e)=>
    {
      
      let scale = L.CRS.Earth.scale(map.getZoom());   
      rect.scale(scale/1000000);

      let ltln = L.latLng( 51.500867,-0.088974);
      let pos = map.latLngToContainerPoint(ltln);
      rect.left =  pos.x;
      rect.top = pos.y;
      rect.setCoords();

      this.canvas.renderAll();
      
    });

    map.on("move",(e)=>
    {

      let ltln = L.latLng( 51.500867,-0.088974);
      let pos = map.latLngToContainerPoint(ltln);
      rect.left =  pos.x;
      rect.top = pos.y;
      rect.setCoords();

      this.canvas.renderAll();
      
    });



  
      
  }



  title = 'FabricLeafy';



  
}
