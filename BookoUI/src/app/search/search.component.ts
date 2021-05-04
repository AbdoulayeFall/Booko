import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  chauffeurList: any[] = [];
  public villes: string[] = [
    'Dakar', 'Mbour', 'Touba', 'Thies', 'Saint-louis',
  ]

  public  rechercheForm= this.fb.group({
    depart:['', Validators.required],
    destination:['', Validators.required],
  })
 
  constructor(private fb: FormBuilder, private sh:SharedService) {}  


  ngOnInit(): void {
    this.refreshChauffeurList();
    
  };

  public chauffeurListTrajet(){
    this.refreshChauffeurList();
  }

  public refreshChauffeurList(){
    if (!!this.rechercheForm.value.depart && !!this.rechercheForm.value.destination){
      return this.sh.getChauffeurListTrajet(this.rechercheForm.value.depart, this.rechercheForm.value.destination).subscribe(data =>{
        this.chauffeurList =  data ;
      })
    }
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
