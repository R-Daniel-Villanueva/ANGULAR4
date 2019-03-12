import { Component, OnInit } from '@angular/core';
import { NivelModel } from '../model/nivel-model';
import { AltaModel } from '../model/alta-model';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { DesarrolladoresService } from '../services/desarrolladores.service';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})

export class AltaComponent implements OnInit {

  niveles: NivelModel[];
  idNivel: number;

  constructor(private formBuilder:FormBuilder,private dataService:DataService, private desarrolladoresService: DesarrolladoresService) {

      this.niveles=[
        {id:1, name:'Senior'},
        {id:2, name:'Junior'},
        {id:3, name:'Midle'}
      ];
   }

   registroForm= this.formBuilder.group({
     id:[0],
     nombre:['',Validators.required],
     apellidoPaterno:['',Validators.required],
     apellidoMaterno:['',Validators.required],
     idNivel:[-1,Validators.required]
   })

  ngOnInit() {
  }
  submit(){
    if(this.registroForm.valid &&this.registroForm.value.idNivel>=0){
      let desarrollador= new AltaModel();

      desarrollador.nombre=this.registroForm.value.nombre;
      desarrollador.apellidoPaterno=this.registroForm.value.apellidoPaterno;
      desarrollador.apellidoMaterno=this.registroForm.value.apellidoMaterno;
      desarrollador.nivel=this.registroForm.value.idNivel;

      this.dataService.setIsLoadingEvent(true);
      this.desarrolladoresService.save(desarrollador).subscribe(result =>{
      this.dataService.setIsLoadingEvent(false);
        if(result){
          this.dataService.setGeneralNotificationMessage('Registro guardado');
        }else{
          this.dataService.setGeneralNotificationMessage('Acceso al servicio pero no guarda');
        }
      }, error =>{
        console.error(error);
        this.dataService.setIsLoadingEvent(false);
        this.dataService.setGeneralNotificationMessage('ERROR EN LA CAPTURA DE LOS DATOS');
      });
    }else{
      this.dataService.setGeneralNotificationMessage("ERROR EN LA CAPTURA DE DATOS");
    }
  }
}
