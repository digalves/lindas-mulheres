import { Component } from '@angular/core';
import { injectSpeedInsights } from '@vercel/speed-insights';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-index',
  standalone: false,
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  currentPageVideos = 1;
  currentPageFotos = 1;
  currentPageGifs = 1;
  public photosSlide: number = 3;
  public amountVideoFiles: number = 15;
  public amountPhotosSec2: number = 9;
  public amountGifs: number = 10;
  public slideArray: number[] = [];
  public videosArray: number[] = [];
  public photosSec2Array: number[] = [];
  public gifsArray: number[] = [];

  constructor() {
  
  }

  ngOnInit(): void {
    injectSpeedInsights();
    this.fillSlidesArray();
    this.fillVideoArray();
    this.fillPhotosSec2Array();
    this.fillGifsArray();
    this.showAlert();
  }

  fillSlidesArray() {
    for(let n = 1; n <= this.photosSlide; n++) {
      this.slideArray.push(n);
    }
  }

  fillVideoArray() {
    for(let n = 1; n <= this.amountVideoFiles; n++) {
      this.videosArray.push(n);
    }
  }

  fillPhotosSec2Array() {
    for(let n = 1; n <= this.amountPhotosSec2; n++) {
      this.photosSec2Array.push(n);
    }
  }

  fillGifsArray() {
    for(let n = 1; n <= this.amountGifs; n++) {
      this.gifsArray.push(n);
    }
  }

  showAlert() {
    Swal.fire({
      title: '<strong>Você tem 18 anos ou mais?</strong>',
      confirmButtonText: 'SIM',
      showCancelButton: true,
      cancelButtonText: 'NÂO',
      icon: "question",
      backdrop: true,
      allowOutsideClick: false,
      
    }).then((result) => {
      if(result.value) {
        
      } else {
        this.showAlert();
      }
    });
  }

}
