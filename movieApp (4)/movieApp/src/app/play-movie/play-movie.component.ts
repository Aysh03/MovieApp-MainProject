import { Component, OnInit } from '@angular/core';
import * as NGYTPackage from '../../.././package.json';
import { DataserviceService } from '../services/dataservice.service';
import { DomSanitizer } from '@angular/platform-browser';
// import * as NGYTPackage from '../../../package.json'
import { NotifierServiceService } from '../services/notifier-service.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-play-movie',
  templateUrl: './play-movie.component.html',
  styleUrls: ['./play-movie.component.css'],
})
export class PlayMovieComponent implements OnInit {
  public safeUrl: any;
  videoIds!: any[];
  // current video indexl̥
  currentVideo: number = 0;
  play: boolean = false;
  // constructor() {
  //   this.version = NGYTPackage['dependencies']['ngx-youtube-player'].replace(
  //     '^',
  //     ''
  //   );
  // }

  constructor(
    private dataservice: DataserviceService,
    private userservice: UserServiceService,
    private sanitizer: DomSanitizer,
    private Toaster: NotifierServiceService
  ) {}
  ngOnInit(): void {
    this.getVideoPlaying();
    this.getUserDetails();
    // this.toPlayMovie();
  }

  // playVideo() {
  //  this.key=this.dataservice.videoData.keys
  //   this.safeUrl = this.domSantitizer.bypassSecurityTrustResourceUrl(
  //     "https://www.youtube.com/embed/"+this.key+""
  //   );
  // }

  // getVideoPlaying() {
  //   this.id = this.dataservice.id;
  //   console.log(this.id);

  //   this.dataservice.getVideos(this.id).subscribe({
  //     next: (res) => {
  //       const key = res.results[0].key;
  //       console.log(key);

  //       this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
  //         `https://www.youtube.com/embed/${key}`
  //       );
  //     },
  //   });
  // }

  // playnext() {
  //   this.id = this.dataservice.id;
  //   console.log(this.id);

  //   this.dataservice.getVideos(this.id).subscribe({
  //     next: (res) => {
  //       for (let i = 1;i< res.results.length; i++) {
  //         const keyId= res.results[i].key;
  //         console.log(keyId);

  //         this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
  //           `https://www.youtube.com/embed/${keyId}`
  //         );
  //       }
  //     },
  //   });
  // }
  id!: number;
  getVideoPlaying() {
    this.id = this.dataservice.id;
    console.log(this.id);

    this.dataservice.getVideos(this.id).subscribe({
      next: (res) => {
        this.videoIds = res.results.map((video: { key: any }) => video.key);
        this.currentVideo = 0;
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          `https://www.youtube.com/embed/${this.videoIds[this.currentVideo]}`
        );
      },
    });
  }

  playNext() {
    if (this.currentVideo === this.videoIds.length - 1) {
      this.Toaster.showWarning(
        'There is no Next  video',
        'You are taken to first video'
      );
      this.getVideoPlaying();
    } else {
      this.currentVideo = (this.currentVideo + 1) % this.videoIds.length;
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${this.videoIds[this.currentVideo]}`
      );
      console.log(this.currentVideo);
    }
  }
  playPrevious() {
    if (this.currentVideo == 0) {
      this.Toaster.showWarning(
        'There is no Previous videos',
        'You can watch next video though'
      );
      this.getVideoPlaying();
    } else {
      this.currentVideo = (this.currentVideo - 1) % this.videoIds.length;
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${this.videoIds[this.currentVideo]}`
      );
    }
  }

  firstNamee!: any;

  image: any;
  userdat: any;
  profilePicdata: any;
  allMovies: any;
  getUserDetails() {
    this.userservice.getUserDetails().subscribe({
      next: (result) => {
        this.userdat = result;
        console.log(this.userdat);
        this.profilePicdata = this.userdat.profilePic.data;
        this.firstNamee = this.userdat.firstName;
        console.log(this.firstNamee);
      },
    });
  }
}
