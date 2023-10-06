import { Component } from "@angular/core";

@Component({
    selector: "app-container",  // naming convention: app-<componentName>
    templateUrl: "./container.component.html",
    styleUrls: ["./container.component.css"]
})

export class ContainerComponent {
    title = "Custom Container";
}