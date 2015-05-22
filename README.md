# BootsMenu
Simple Bootstrap Nested Menu for jQuery Plugin. Show [Demo](https://github.com/samejack/BootsMenu/demo/index.html).

## Starting
Html Code
```html
<ul id="my-example" class="nav navbar-nav">
    <li class="dropdown">
        <a href="#" data-toggle="dropdown" role="button" aria-expanded="false">Menu 1</a>
    </li>
    <li class="dropdown">
        <a href="#" data-toggle="dropdown" role="button" aria-expanded="false">Menu 2</a>
        <ul class="dropdown-menu" role="menu">
            <li><a href="#">Item 1</a></li>
            <li><a href="#">Item 2</a>
                <ul class="dropdown-menu" role="menu">
                    <li><a href="#">Item 1</a></li>
                    <li><a href="#">Item 2</a></li>
                </ul>
            </li>
        </ul>
    </li>
</ul>
```
JavaScript Code
```js
$(document).ready(function () {

    // initialize
    $('#my-example').bootsMenu();

});
```
