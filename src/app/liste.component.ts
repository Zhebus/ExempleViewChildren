import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from "@angular/core";
@Component({
  selector: "liste-compte",
  templateUrl: "./liste-compte.component.html"
})
export class ListeCompteComponent {
  @Input() valeur;
  @ViewChild("inputRecherche") inputRecherche;
  @Output() blur = new EventEmitter<null>();

  blurInput() {
    this.blur.emit();
  }
}
