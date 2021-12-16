import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.moviesInTheaters = [
      {
        title: 'Spider-Man : No Way Home',
        releaseDate: new Date(),
        price: 1400.99,
        poster:
          'https://images.hdqwalls.com/walls/thumb/2021-spider-man-no-way-home-4k-f1.jpg',
      },
      {
        title: 'The Witcher',
        releaseDate: new Date('2016-11-14'),
        price: 300.99,
        poster:
          'https://lh3.googleusercontent.com/proxy/ZxraMgDhx4Ov01DeM39_SWVN84Rzoky8qnZXFFj4j6mW5Ti9Ou0NL5Xn8TVu6V9H1PNiKe8r2MUJIaFUUh5CPxVkE1Ocs6reCS2Agzr5LJzUkhB28JYeRZfuRmGkKxCThRPh_pmvfG475-akim--c9H5l9VNrYFyVPe_GYZHY9BRTmDPFKXraybgyai-8teQCzaeHDMsSGVPWKG9josDAvwc12QxH1nofUgB4KoNNyjH9fnXGw',
      },
    ];

    this.moviesFutureReleases = [];
  }

  moviesInTheaters;
  moviesFutureReleases;
}
