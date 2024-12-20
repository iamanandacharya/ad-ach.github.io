import { Component } from '@angular/core';
import { experiencesEn} from '../education/experiencesEn';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-education',
    imports: [CommonModule],
    templateUrl: './education.component.html',
    styleUrl: './education.component.css'
})
export class EducationComponent {
    experiences:any=experiencesEn;
    constructor() {
        this.experiences=experiencesEn;
    }
    detailOnClick(experience: any) {
        experience.detailIsDisplayed=!experience.detailIsDisplayed;
      }
}
