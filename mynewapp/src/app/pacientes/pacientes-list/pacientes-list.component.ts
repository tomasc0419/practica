import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-pacientes-list',
  templateUrl: './pacientes-list.component.html',
  styleUrls: ['./pacientes-list.component.css']
})
export class PacientesListComponent implements OnInit {
  pacientes: Array<Paciente> = [];
  numeroDeMenoresDeEdad: number = 0;

  constructor(private pacienteService: PacienteService) { }

  getPacientes(): void {
    this.pacienteService.getPacientes().subscribe((pacientes) => { 
      this.pacientes = pacientes;
      this.numeroDeMenoresDeEdad = this.contarMenoresDeEdad();
    });
  }

  contarMenoresDeEdad(): number {
    let contador = 0;
    for (let paciente of this.pacientes) {
      if (paciente.edad < 18) {
        contador++;
      }
    }
    return contador;
  }

  ngOnInit() {
    this.getPacientes();
  }

  selected: Boolean = false;
  selectedPaciente!: Paciente;
  
  onSelected(paciente: Paciente): void {
    this.selected = true;
    this.selectedPaciente = paciente;
  }
}
