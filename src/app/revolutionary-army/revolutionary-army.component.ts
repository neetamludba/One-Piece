import { Component, Input, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor/lib/config';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'revolutionary-army',
  templateUrl: './revolutionary-army.component.html',
  styleUrls: ['./revolutionary-army.component.css']
})
export class RevolutionaryArmyComponent implements OnInit {

  constructor() { }

  revolutionaryArmyDetailForm = new FormGroup({
    htmlContent: new FormControl(null, [
      Validators.required
    ])
  });


  ngOnInit(): void {
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
}
