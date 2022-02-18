import { AfterViewChecked, AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnChanges, OnDestroy {
  public strings: string[] = ["Juan", "Laura", "Mario"];
  public name: string = "Juan";
  public image: string = "http://placeimg.com/640/480/cats";
  public isHidden: boolean = false;

  constructor() {
    console.log('Me he construido');
  }

  public decirHola() {
    console.log("Hola!");
  }

  public toggleDiv() {
    this.isHidden = !this.isHidden;
  }


  ngOnInit(): void {
    console.log("Me he iniciado");
  }

  ngOnChanges(): void {
    console.log('He cambiado');
  }

  ngOnDestroy(): void {
    console.log('Me he destruido');
  }

}
