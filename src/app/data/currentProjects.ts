import { Project } from './../models/project';
export class CurrentProjects {
  public getProjects(): Project[] {
    const toReturn: Project[] = [];

    const fonstagram: Project = new Project();
    fonstagram.title = 'FonstaGram';
    fonstagram.URL = 'fonstagram';
    fonstagram.description = 'Een social-media platform, voor en door studenten';
    fonstagram.link = 'http://www.fonstagram.jopverhoeven.nl';
    // tslint:disable-next-line: max-line-length
    fonstagram.detailedDescription = 'FonstaGram is een social-media platform, gemaakt voor en door studenten. Het maakt gebruik van de laatste webtechnieken, zoals Angular in combinatie met Material Design, Flex-Layout en meer. De krachtige back-end zorgt ervoor dat data snel en efficiënt geladen kan worden voor een goede ervaring tijdens het navigeren van FonstaGram';
    fonstagram.image = '../../assets/Angular Logo.png';

    toReturn.push(fonstagram);

    return toReturn;
  }
}
