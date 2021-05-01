import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SharedService } from '../shared.service';


@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  chauffeurList: any[] = [];
  public villes: string[] = [
    'Dakar', 'Mbour', 'Touba', 'Thies', 'Saint-louis',
  ]

  public rechercheForm = this.fb.group({
    depart:['', Validators.required],
    destination:['', Validators.required],
  })

  constructor(private fb: FormBuilder, private sh:SharedService) {}    


  ngOnInit(): void {
    this.refreshChauffeurList();
  };

  public refreshChauffeurList(){
    return this.sh.getChauffeurList().subscribe(data =>{
      this.chauffeurList =  data ;
    })
  }

  public saveRecherche(){
    console.log(this.rechercheForm);
    console.log('valeurs: ', JSON.stringify(this.rechercheForm.value));
    console.log('hello');
  }
}