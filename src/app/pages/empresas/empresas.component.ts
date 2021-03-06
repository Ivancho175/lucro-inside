import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { getLocaleDirection } from '@angular/common';
import { ClientsImg } from 'src/app/@core/models/clients-img';
import { Section } from 'src/app/@core/models/section';
import { CmsService } from 'src/app/@core/services/cms.service';

import SwiperCore, { Swiper, SwiperOptions, Pagination, Autoplay } from 'swiper';

SwiperCore.use([Pagination, Autoplay]);

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss']
})
export class EmpresasComponent implements OnInit, AfterViewInit {
  @ViewChild('home')
  home: ElementRef = {} as ElementRef
  @ViewChild('purpose')
  purpose: ElementRef = {} as ElementRef
  @ViewChild('beliefs')
  beliefs: ElementRef = {} as ElementRef
  @ViewChild('work')
  work: ElementRef = {} as ElementRef

  public observer: any;

  public sectionOne: Section = {}
  public sectionTwo: Section = {}
  public sectionThree: Section = {}
  public sectionFour: Section = {}
  public clientes: any

  clientsConfig: SwiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 30,
    pagination: { dynamicBullets: true, clickable: true },
    scrollbar: { draggable: true },
    autoplay: { disableOnInteraction: false, delay: 2500, pauseOnMouseEnter: true },
    observer: true,
    observeParents: true,
    //slideClass: 'swipper-slide-custom'
  };

  constructor(private service: CmsService) { }

  async ngOnInit() {
    this.intersectionObserver()
    window.scrollTo(0, 0);
    const p = await this.service.get()
    this.sectionOne = p.Empresas?.find(item => item.name == 'sectionOne') || {}
    this.sectionTwo = p.Empresas?.find(item => item.name == 'sectionTwo') || {}
    this.sectionThree = p.Empresas?.find(item => item.name == 'sectionThree') || {}
    this.sectionFour = p.Empresas?.find(item => item.name == 'sectionFour') || {}
    this.clientes = p.Clientes
  }

  ngAfterViewInit() {
    this.observer.observe(this.home.nativeElement)
    this.observer.observe(this.purpose.nativeElement)
    this.observer.observe(this.beliefs.nativeElement)
    this.observer.observe(this.work.nativeElement)
  }

  intersectionObserver() {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    }
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.toggle('show')
        this.observer.unobserve(entry.target)
      })
    }, options);
  }

  onSwiper(swiper: Swiper) {
    // console.log(swiper);
  }
  onSlideChange() {
    // console.log('slide change');
  }

}
