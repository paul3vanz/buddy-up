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

  scrollToElement(htmlElement: HTMLElement): void {
    setTimeout(
      () => htmlElement.scrollIntoView({ behavior: "smooth", block: "start" }),
      this.scrollLockingDelay
    );
  }

  scrollToFirstError(): void {
    setTimeout(() => {
      const htmlElement: HTMLElement = document
        .querySelector(".is-invalid")
        .closest(".container");

      if (htmlElement) {
        this.scrollToElement(htmlElement);
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
