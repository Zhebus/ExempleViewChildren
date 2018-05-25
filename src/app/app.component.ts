import { Component, ViewChildren, QueryList } from "@angular/core";
import { ListeCompteComponent } from "./liste.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  tableau = [{ valeur: "une" }, { valeur: "deux" }, { valeur: "trois" }];
  @ViewChildren(ListeCompteComponent)
  listeListeCompte: QueryList<ListeCompteComponent>;

  targetSecondElement() {
    this.listeListeCompte.toArray()[2].inputRecherche.nativeElement.focus();
  }

  blurListeCompte(index) {
    const lc = this.listeListeCompte.toArray()[index + 1];
    if (!lc.valeur) {
      lc.inputRecherche.nativeElement.focus();
    }
  }
}
