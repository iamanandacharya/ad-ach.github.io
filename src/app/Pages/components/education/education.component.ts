import { Component } from '@angular/core';
import { experiencesEn, experiencesEn2} from '../education/experiencesEn';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-education',
    imports: [CommonModule],
    templateUrl: './education.component.html',
    styleUrl: './education.component.css'
})
export class EducationComponent {
    experiences:any=experiencesEn;
    experiences2:any=experiencesEn2;

    
    constructor() {
        this.experiences=experiencesEn;
        this.experiences2=experiencesEn2;
    }
    detailOnClick(experience: any) {
        experience.detailIsDisplayed=!experience.detailIsDisplayed;
      }
}
