import { Component, ElementRef, ViewChild } from '@angular/core';
import { LanguageService } from './language.service';
import jsPDF from 'jspdf';
import html2Canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('donloadView', {static: false}) view: ElementRef;
  @ViewChild('downloadLink', {static: false}) downladLink: ElementRef;
  @ViewChild('canvas', {static: false}) img: ElementRef;

  constructor(private languageService: LanguageService) {}

  selectedLanguage = 'chinese';

  languages = [
    'zh_tw',
    'en_us'
  ]

  ngOnInit() {
  }

  download() {
    html2Canvas(this.view.nativeElement).then(cavas => {
        const image = cavas.toDataURL('image/jpeg', 1.0);
        // document.body.appendChild(cavas);
        const doc = new jsPDF('','pt',[595.28, 841.89]);
        doc.addImage(image, 'JPEG', 0, 0, 595.28, 595.28/cavas.width * cavas.height);
        doc.save(`resume_${this.selectedLanguage}.pdf`);
    })

    // html2Canvas(this.view.nativeElement).then((canvas) => {
    //   const a = canvas.toDataURL('image/png');
    // });
  }

  translate(select: string) {
    this.selectedLanguage = select === 'zh_tw' ? 'chinese' : 'english';
    this.languageService.changeLanguage(select);
  }
}
