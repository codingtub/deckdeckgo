/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface DeckgoInlineEditor {
    'mobile': boolean;
    'stickyDesktop': boolean;
    'stickyMobile': boolean;
  }
  interface DeckgoInlineEditorAttributes extends StencilHTMLAttributes {
    'mobile'?: boolean;
    'stickyDesktop'?: boolean;
    'stickyMobile'?: boolean;
  }
}

declare global {
  interface StencilElementInterfaces {
    'DeckgoInlineEditor': Components.DeckgoInlineEditor;
  }

  interface StencilIntrinsicElements {
    'deckgo-inline-editor': Components.DeckgoInlineEditorAttributes;
  }


  interface HTMLDeckgoInlineEditorElement extends Components.DeckgoInlineEditor, HTMLStencilElement {}
  var HTMLDeckgoInlineEditorElement: {
    prototype: HTMLDeckgoInlineEditorElement;
    new (): HTMLDeckgoInlineEditorElement;
  };

  interface HTMLElementTagNameMap {
    'deckgo-inline-editor': HTMLDeckgoInlineEditorElement
  }

  interface ElementTagNameMap {
    'deckgo-inline-editor': HTMLDeckgoInlineEditorElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
