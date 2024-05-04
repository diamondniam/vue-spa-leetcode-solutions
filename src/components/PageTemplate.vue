<script>
export default {
  props: ['justInputs']
}
</script>

<template>
  <div class="wrapper">
    <div class="left">
      <div class="problem">
        <div class="title"><slot name="title"></slot></div>
        <div class="text"><div class="border"></div><slot name="text"></slot></div>
      </div>
  
      <div v-show="justInputs" class="inputs">
        <div class="title">Input:</div>
        <div class="input">
          <slot name="input"></slot>
        </div>
      </div>

      <div v-show="justInputs" class="image">
        <div class="image">
          <slot name="image"></slot>
        </div>
      </div>

      <div v-show="!justInputs" class="input-image">
        <slot name="inputs"></slot>
      </div>

      <div class="notes">
        <div class="title">NOTES:</div>
        <div class="text"><div class="border"></div><slot name="notes"></slot></div>
      </div>
    </div>

    <div class="right">
      <div class="title">CODE:</div>
      <div class="code">
        <slot name="code"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
$window-border: 0.5px solid rgba(255, 255, 255, 0.118);
$window-background: #2e2e2e;
$window-background-lighter: rgb(57, 57, 57);

@mixin window() {
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background: $window-background;
  border: $window-border;
  overflow: hidden;
}

@mixin text() {
  display: flex;
  gap: 20px;

  .border {
    min-width: 3px;
    border-radius: 20px;
    background: var(--green-color-1);
    height: auto;
  }
}

@media screen and (max-width: 992px) {
  body {
    .wrapper {
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
  }
}

.wrapper {
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5%;
  padding: 0 5%;
}
.left {
  width: 40%;
  gap: 20px;
  display: flex;
  flex-direction: column;
  
  .problem {
    @include window();
    padding: 10px;
    
    .title {
      margin-bottom: 20px;
      font-weight: 600;
      font-size: 30px;
      background: $window-background-lighter;
      padding: 10px;
      border-radius: 20px;
      border: $window-border;
    }
    .text {
      @include text();
    }
  }

  .inputs {
    @include window();

    .title {
      background: $window-background-lighter;
      padding: 10px
    }

    .input {
      display: flex;
      flex-direction: column;
      padding: 10px;

      .inputs-container {
        display: flex;
        flex-direction: column;
        gap: 10px;

        input {
          background: transparent;
          border: 0;
          outline: none;
          font-size: 15px;
          margin-left: 10px;
        }
        
        .button {
          align-self: center;
          button {
            border-radius: 20px;
            display: block;
            align-self: center;
            cursor: pointer;
            color: $window-background-lighter;
            width: 100px;
            height: 30px;
            outline: none;
            border: none;
            background: var(--green-color-1);
          }
          button:hover {
            background: transparent;
            color: var(--green-color-1);
            border: 1px solid var(--green-color-1);
          }
        }
      }
    }
  }

  .image-container {
    @include window();
    display: flex;
    flex-direction: column-reverse;
    padding: 10px;
    gap: 20px;

    .answer {
      @include text();
      .text {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
    }
  }

  .input-image {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .inputs {
      @include window();
  
      .title {
        background: $window-background-lighter;
        padding: 10px
      }
  
      .input {
        display: flex;
        flex-direction: column;
        padding: 10px;
  
        input {
          background: transparent;
          border: 0;
          outline: none;
          font-size: 15px;
          margin-left: 10px;
        }
      }
    }

    .image-container {
      @include window();
      display: flex;
      flex-direction: column-reverse;
      padding: 10px;
      gap: 20px;
  
      .answer {
        @include text();
        .text {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
      }
    }
  }

  .notes {
    @include window();

    .title {
      background: $window-background-lighter;
      padding: 10px
    }

    .text {
      @include text();
      padding: 10px;
    }
  }
}
.right {
  width: 40%;
  @include window();
  overflow: scroll;

  .title {
    width: 1000px;
    background: $window-background-lighter;
    padding: 10px;
    border-bottom: $window-border;
  }

  .code {
    padding: 0 10px;
    code {
      font-family: "Source Code Pro", monospace;
      font-optical-sizing: auto;
      font-weight: 200;
      font-style: normal;
    }
  }
}

code[class*=language-],pre[class*=language-]{color:#fff;background:0 0;font-family:Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;font-size:1em;text-align:left;text-shadow:none;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.1;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}:not(pre)>code[class*=language-],pre[class*=language-]{background:transparent}pre[class*=language-]{border-radius:.5em;margin:.5em 0;overflow:auto;padding:1em}pre[class*=language-]::-moz-selection{background:#27292a}pre[class*=language-]::selection{background:#27292a}code[class*=language-] ::-moz-selection,code[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection{text-shadow:none;background:hsla(0,0%,93%,.15)}code[class*=language-] ::selection,code[class*=language-]::selection,pre[class*=language-] ::selection,pre[class*=language-]::selection{text-shadow:none;background:hsla(0,0%,93%,.15)}:not(pre)>code[class*=language-]{border-radius:.3em;border:.13em solid #545454;box-shadow:1px 1px .3em -.1em #000 inset;padding:.15em .2em .05em;white-space:normal}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#777}.token.punctuation{opacity:.7}.token.namespace{opacity:.7}.token.boolean,.token.deleted,.token.number,.token.tag{color:#ce6849}.token.builtin,.token.constant,.token.keyword,.token.property,.token.selector,.token.symbol{color:#f9ed99}.language-css .token.string,.style .token.string,.token.attr-name,.token.attr-value,.token.char,.token.entity,.token.inserted,.token.operator,.token.string,.token.url,.token.variable{color:#909e6a}.token.atrule{color:#7385a5}.token.important,.token.regex{color:#e8c062}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}.language-markup .token.attr-name,.language-markup .token.punctuation,.language-markup .token.tag{color:#ac885c}.token{position:relative;z-index:1}.line-highlight.line-highlight{background:hsla(0,0%,33%,.25);background:linear-gradient(to right,hsla(0,0%,33%,.1) 70%,hsla(0,0%,33%,0));border-bottom:1px dashed #545454;border-top:1px dashed #545454;margin-top:.75em;z-index:0}.line-highlight.line-highlight:before,.line-highlight.line-highlight[data-end]:after{background-color:#8693a6;color:#f4f1ef}
div.code-toolbar{position:relative}div.code-toolbar>.toolbar{position:absolute;z-index:10;top:.3em;right:.2em;transition:opacity .3s ease-in-out;opacity:0}div.code-toolbar:hover>.toolbar{opacity:1}div.code-toolbar:focus-within>.toolbar{opacity:1}div.code-toolbar>.toolbar>.toolbar-item{display:inline-block}div.code-toolbar>.toolbar>.toolbar-item>a{cursor:pointer}div.code-toolbar>.toolbar>.toolbar-item>button{background:0 0;border:0;color:inherit;font:inherit;line-height:normal;overflow:visible;padding:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}div.code-toolbar>.toolbar>.toolbar-item>a,div.code-toolbar>.toolbar>.toolbar-item>button,div.code-toolbar>.toolbar>.toolbar-item>span{color:#bbb;font-size:.8em;padding:0 .5em;background:#f5f2f0;background:rgba(224,224,224,.2);box-shadow:0 2px 0 0 rgba(0,0,0,.2);border-radius:.5em}div.code-toolbar>.toolbar>.toolbar-item>a:focus,div.code-toolbar>.toolbar>.toolbar-item>a:hover,div.code-toolbar>.toolbar>.toolbar-item>button:focus,div.code-toolbar>.toolbar>.toolbar-item>button:hover,div.code-toolbar>.toolbar>.toolbar-item>span:focus,div.code-toolbar>.toolbar>.toolbar-item>span:hover{color:inherit;text-decoration:none}
</style>