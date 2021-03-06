/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface DeckgoSlideBigImg {
        "afterSwipe": () => Promise<void>;
        "axis": 'x' | 'y';
        "beforeSwipe": (enter: boolean) => Promise<boolean>;
        "hideContent": () => Promise<void>;
        "imgAlt": string;
        "imgDivisions": string;
        "imgSrc": string;
        "lazyLoadContent": () => Promise<void>;
        "revealContent": () => Promise<void>;
        "reverse": boolean;
    }
}
declare global {
    interface HTMLDeckgoSlideBigImgElement extends Components.DeckgoSlideBigImg, HTMLStencilElement {
    }
    var HTMLDeckgoSlideBigImgElement: {
        prototype: HTMLDeckgoSlideBigImgElement;
        new (): HTMLDeckgoSlideBigImgElement;
    };
    interface HTMLElementTagNameMap {
        "deckgo-slide-big-img": HTMLDeckgoSlideBigImgElement;
    }
}
declare namespace LocalJSX {
    interface DeckgoSlideBigImg {
        "axis"?: 'x' | 'y';
        "imgAlt"?: string;
        "imgDivisions"?: string;
        "imgSrc"?: string;
        "onSlideDidLoad"?: (event: CustomEvent<void>) => void;
        "reverse"?: boolean;
    }
    interface IntrinsicElements {
        "deckgo-slide-big-img": DeckgoSlideBigImg;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "deckgo-slide-big-img": LocalJSX.DeckgoSlideBigImg & JSXBase.HTMLAttributes<HTMLDeckgoSlideBigImgElement>;
        }
    }
}
