import { AfterViewInit, Component, OnInit, Output } from '@angular/core';
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper', {
      loop: true,
      autoplay: true,
      slidesPerView: 5,
      spaceBetween: 15,
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  collapsed = false;
  title = 'Fruver';
  cliente = true;
  Listar = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
  closesidenav(): void {
    this.collapsed = false;
  }
}
