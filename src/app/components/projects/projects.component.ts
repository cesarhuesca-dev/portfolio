import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {

  projects = [
      { id: 1, name: 'Nexus AI', desc: 'Plataforma de orquestación de LLMs para empresas.', tech: ['Next.js', 'NestJS', 'Redis'], status: 'Active', color: 'from-blue-500' },
      { id: 2, name: 'CloudVault', desc: 'Almacenamiento cifrado con arquitectura zero-knowledge.', tech: ['Angular', 'Go', 'AWS'], status: 'Beta', color: 'from-purple-500' },
      { id: 3, name: 'Quantum Analytics', desc: 'Motor de procesamiento de datos en tiempo real.', tech: ['Rust', 'NestJS', 'PostgreSQL'], status: 'Archived', color: 'from-emerald-500' }
  ]

}
