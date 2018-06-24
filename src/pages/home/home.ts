import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ImageLoader } from 'ionic-image-loader';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users = [];
  jsonData = null;

  constructor(public navCtrl: NavController, private htppClient: HttpClient, private imageLoader: ImageLoader) {

  }

  loadData() {
    if (!this.jsonData) {
      this.htppClient.get('https://randomuser.me/api/?results=100').subscribe(res => {
        this.users = res['results'];
        this.jsonData = res['results'];
      });
    } else {
      this.users = [];
      setTimeout(() => {
        this.users = this.jsonData; 
      }, 1000);
    }
  }
 
  clearCache(refresher) {
    this.imageLoader.clearCache();
    refresher.complete();
  }
 
  onImageLoad(event) {
    console.log('image ready: ', event);
  }

}
