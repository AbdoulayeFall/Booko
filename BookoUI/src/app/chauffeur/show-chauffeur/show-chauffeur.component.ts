import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-chauffeur',
  templateUrl: './show-chauffeur.component.html',
  styleUrls: ['./show-chauffeur.component.css']
})
export class ShowChauffeurComponent implements OnInit {
  
  chauffeurList: any;

  constructor(private sh:SharedService) { }

  ngOnInit(): void {
    // this.refreshChauffeurList();
  };

  // public refreshChauffeurList(){
  //   return this.sh.getChauffeurList().subscribe(data =>{
  //     this.chauffeurList =  data ;
  //   })
  // }

}
