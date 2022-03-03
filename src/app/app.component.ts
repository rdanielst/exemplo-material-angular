import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogExemploComponent } from './dialog-exemplo/dialog-exemplo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  

  form = new FormGroup({
    nome: new FormControl(''),
    idade: new FormControl(''),
  });


  constructor(public dialog: MatDialog) {}


  openDialog() {

    // Variável que recebe a referência do Dialog
    const dlg = this.dialog.open(DialogExemploComponent, {
      width: '400px',
      data: this.form.value
    });

    // nos inscrevemos para aguradar o retorno do Dialog após ser fechado
    dlg.afterClosed().subscribe((retorno) => {

      // aqui é apenas um teste para o caso de não haver retorno
      if(retorno) {
        this.form.get('nome')?.setValue(retorno?.nome);
        this.form.get('idade')?.setValue(retorno?.idade);
      }
    });

  }

}
