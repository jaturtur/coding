import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-freind',
  templateUrl: './freind.page.html',
  styleUrls: ['./freind.page.scss'],
})
export class FriendPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  friendList = [
    { nama: 'Parkhyungseok', status: 'Add friend', img: "assets/img/park.jpeg"},
    { nama: 'Vasco_id', status: 'Add friend', img: "assets/img/vasco.jpeg"},
    { nama: 'Han_Seojun', status: 'Accept', img: "assets/img/seojun.jpeg"},
    { nama: 'Lee_Suho', status: 'Accept', img: "assets/img/seo.jpeg"},
    { nama: 'toro_M', status: 'Accept', img: "assets/img/toro.jpeg"},
    { nama: 'janghyun_anak_satu', status: 'unfriend', img: "assets/img/jang.jpeg"},
    { nama: 'sho_sayangibu', status: 'Add friend', img: "assets/img/sho.jpeg"},
    { nama: 'dg_papanatas', status: 'Accept', img: "assets/img/dg.jpeg"},
  ];
}