import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-exemplo',
  templateUrl: './dialog-exemplo.component.html',
  styleUrls: ['./dialog-exemplo.component.scss']
})
export class DialogExemploComponent implements OnInit {

  form = new FormGroup({
    nome: new FormControl(''),
    idade: new FormControl(''),
  });

  constructor(
    public dialogRef: MatDialogRef<DialogExemploComponent>,
    // variável que traz as informações enviadas do componente pai
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  ngOnInit(): void {
    this.form.get('nome')?.setValue(this.data.nome);
    this.form.get('idade')?.setValue(this.data.idade);
  }

  onClose() {
    // Aqui passamos os valores que queremos retornar ao fechar o Dialog
    this.dialogRef.close(this.form.value);
  }

}
