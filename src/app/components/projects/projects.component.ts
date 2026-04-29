import { ChangeDetectionStrategy, Component } from '@angular/core';
// import {NgOptimizedImage} from '@angular/common';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-projects',
  imports: [ImageModule],
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {


  projects = [
    {
      id: 1,
      name: 'Impostor Game',
      desc: 'Juego multijugador viral de redes sociales, en el que cada jugador recibe una palabra secreta excepto uno, el impostor. \nA través de pistas, engaños y deducción, los jugadores deben descubrir al impostor, antes de que el impostor adivine la palabra real.',
      status: 'Finalizado',
      statusClass: 'c-projects-item-header-status-finished',
      banner: 'impostor-game-es.png',
      repo: 'https://github.com/cesarhuesca-dev/impostor-game-infra'
    },
    {
      id: 2,
      name: 'Restaurant manager',
      desc: 'Plataforma intuitiva para gestionar restaurantes desde un solo lugar: mesas, pedidos, inventario y personal de forma simple y eficiente.',
      status: 'En desarrollo',
      statusClass: 'c-projects-item-header-status-inprogress',
      banner: 'restaurant-banner-es.png',

    }
  ]

  goToGithub(url: string) {
    window.open(url)
  }

}
