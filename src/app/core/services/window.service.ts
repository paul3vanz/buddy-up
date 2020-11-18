import { Injectable } from "@angular/core";
import { Params } from "@angular/router";

@Injectable()
export class WindowService {
  private scrollLockingDelay = 100;

  get window(): Window {
    return window;
  }

  openNewWindow(url: string): Window {
    return this.window.open(url);
  }

  navigateTo(url): void {
    this.window.location.href = url;
  }

  scrollToTop(): void {
    setTimeout(() => this.window.scrollTo(0, 0), this.scrollLockingDelay);
  }

  scrollToElement(htmlElement: HTMLElement, offset?: number): void {
    setTimeout(() => {
      const position = htmlElement.style.position;
      const top = htmlElement.style.top;

      if (offset) {
        htmlElement.style.position = "relative";
        htmlElement.style.top = `${offset}px`;
      }

      htmlElement.scrollIntoView({ behavior: "smooth", block: "start" });

      if (offset) {
        htmlElement.style.position = position;
        htmlElement.style.top = top;
      }
    }, this.scrollLockingDelay);
  }

  scrollToFirstError(): void {
    setTimeout(() => {
      const htmlElement: HTMLElement = document.querySelector(".is-invalid");

      if (htmlElement) {
        this.scrollToElement(htmlElement, -40);
      }
    });
  }

  resetFocus(): void {
    const element: HTMLElement = this.window.document.querySelector("nav a");

    if (element) {
      element.focus();
    }
  }

  newPageReset(): void {
    this.resetFocus();
    this.scrollToTop();
  }
}
