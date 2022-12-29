import { Component, Input, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor/lib/config';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RevolutionaryArmyService } from '../revolutionary-army.service';


@Component({
  selector: 'revolutionary-army-details',
  templateUrl: './revolutionary-army-details.component.html',
  styleUrls: ['./revolutionary-army-details.component.css']
})
export class RevolutionaryArmyDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private revolutionaryArmyService: RevolutionaryArmyService,
  ) { }

  revolutionaryArmyId = Date.now();
  revolutionaryArmyDetailForm = new FormGroup({
    htmlContent: new FormControl(null, [
      Validators.required
    ])
  });


  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));

    if (!isNaN(id) && id > 0) {
      this.revolutionaryArmyId = id;
      this.getRevolutionaryArmy(this.revolutionaryArmyId);
    }
  }
  @Input() displayRevolutionaryArmy: Boolean = false;

  angularEditorLogo = "src/assets/ngular-editor-logo.png";


  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    //upload: (file: File) => { ... }
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
  };


  getRevolutionaryArmy(revolutionaryArmyId: number) {
    this.revolutionaryArmyService.getRevolutionaryArmy(revolutionaryArmyId).then((revolutionaryArmyData) => {
      this.revolutionaryArmyDetailForm
        .setValue({
          htmlContent: revolutionaryArmyData.description,
        });
    });
  }
  saveForm() {
    this.revolutionaryArmyService.saveForm(
      {
        revolutionaryArmyId: this.revolutionaryArmyId,
        description: this.revolutionaryArmyDetailForm.get('htmlContent')?.value
      })
      .then(() =>
        this.router.navigateByUrl('revolutionary-army').catch((error) => {
          console.log(error);
        })
      )
      .catch((ex) => console.log(ex));
  }


  closeForm() {
    this.router.navigateByUrl('revolutionary-army').catch((error) => {
      console.log(error);
    });
  }


}
