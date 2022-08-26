import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {
  mockCover:TrackModel = {
    cover: 'https://i.scdn.co/image/ab67616d0000b27345ca41b0d2352242c7c9d4bc',
    name: 'BEBE (OFICIAL)',
    album: 'Gioli & Assia',
    url: 'http://localhost/track.mp3',
    _id: '1'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
