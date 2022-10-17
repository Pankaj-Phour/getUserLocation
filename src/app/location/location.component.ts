import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as L from 'leaflet'

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements AfterViewInit {


  @ViewChild('mapContainer') mapContainer:ElementRef;
  title = 'location';
  map:any;
  marker:any;
  lat:any = 0;
  lon:any = 0;
  tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    atteibution: '&copy;<a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  })


  mapLoad(){
    this.map = L.map('map',{
      center:[this.lat,this.lon],
      zoom:3
    })
    this.tiles.addTo(this.map)
  }
getlocation(){
  navigator.geolocation.getCurrentPosition(a=>{
    // console.log(a);
    
    this.lat = a.coords.latitude;
    this.lon = a.coords.longitude;
    // console.log(this.lat,this.lon);
    
    const marker = L.marker([this.lat,this.lon]);
    marker.addTo(this.map)
    setTimeout(()=>{
      // console.log(this.map);
      this.map.setView(new L.LatLng(this.lat,this.lon),4,{animation:true})
      setTimeout(()=>{
        this.map.setZoom(5)
        setTimeout(()=>{
          this.map.setZoom(6)
          setTimeout(()=>{
            this.map.setZoom(7)
            setTimeout(()=>{
              this.map.setZoom(8)
              setTimeout(()=>{
                this.map.setZoom(9)
                setTimeout(()=>{
                  this.map.setZoom(10)
                  setTimeout(()=>{
                    this.map.setZoom(11)
                    setTimeout(()=>{
                      this.map.setZoom(12)
                      setTimeout(()=>{
                        this.map.setZoom(14)
                        setTimeout(()=>{
                          this.map.setZoom(15)
                          setTimeout(()=>{
                            this.map.setZoom(16);
                            setTimeout(()=>{
                              this.map.setZoom(17);
                              setTimeout(()=>{
                                this.map.setZoom(18);
                              },150)
                            },150)
                          },150)
                        },150)
                      },200)
                    },200)
                  },200)
                },200)
              },200)
            },200)
          },200)
        },200)
      },200)
    },1500)
  })
}
ngAfterViewInit(): void {
  
  console.log("Hello from Location project");
  this.mapLoad();
  setTimeout(()=>{
    this.getlocation();
  },1500)
}
}
