import { Injectable } from '@angular/core';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root' // Aqui se pone el componente que lo necesita, en este caso todos los componentes porque se indica root
})
export class UsuarioService {

  listaUSR: Usuario[]=[];
  
  constructor() {
    this.listaUSR=[
      new Usuario(1,"Alumno1","Apellido",new Date("11/17/1983",),0,"correo1@mail.com",123456,"1","direccion1",1),
      new Usuario(2,"Alumno2","Apellido2",new Date("01/01/2020"),0,"correo2@mail.com",456789,"0","direccion2",1),
      new Usuario(3,"Alumno3","Apellido3",new Date("01/01/2010"),0,"correo3@mail.com",123456,"2","direccion3",1),
      new Usuario(4,"Alumno4","Apellido4",new Date("01/01/2007"),0,"correo4@mail.com",456789,"2","direccion4",1),
      new Usuario(5,"Alumno5","Apellido5",new Date("01/01/2009"),0,"correo5@mail.com",789123,"1","direccion5",1),
      new Usuario(6,"Profesor1","Apellido6",new Date("01/01/2000"),0,"correo6@mail.com",123456,"1","direccion6",2),
      new Usuario(7,"Profesor2","Apellido7",new Date("01/01/2001"),0,"correo7@mail.com",456789,"0","direccion7",2),
      new Usuario(8,"UsuarioAdmin1","Apellido8",new Date("01/01/2002"),0,"correo8@mail.com",123456,"1","direccion8",3),
      new Usuario(9,"UsuarioAdmin2","Apellido9",new Date("01/01/2003"),0,"correo9@mail.com",456789,"0","direccion9",3),
      new Usuario(10,"UsuarioUsr3","Apellido10",new Date("01/01/2004"),0,"correo10@mail.com",123456,"2","direccion10",4),
      new Usuario(11,"UsuarioUsr4","Apellido11",new Date("01/01/2005"),0,"correo11@mail.com",456789,"2","direccion11",4)
    ];
   }

  getUsuarios() { 
    return this.listaUSR;
  }

  getUsuario(id:number) {
    return this.listaUSR.find(usuario => usuario.id == id);
  }
  getUsuariosPorRol(rolId:number) {

    return this.listaUSR.filter(usuario => usuario.rol == rolId);
  }


  addUsuario(al:Usuario) {
    al.id=this.obtenerSiguienteId()+1;
    this.listaUSR.push(al);
  }
  deleteUsuario(al:Usuario){
    this.listaUSR.splice(this.listaUSR.findIndex(x=>x.id==al.id),1);
  }
  updateUsuario(al:Usuario){
    this.listaUSR[this.listaUSR.findIndex(x=>x.id==al.id)]=al;
  }

  obtenerSiguienteId():number{
    let max=0;
    for(let i=0;i<this.listaUSR.length;i++){
      if (this.listaUSR[i].id>max)
        max=this.listaUSR[i].id;
    }
    return max;
  }
}