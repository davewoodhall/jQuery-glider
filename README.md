# jQuery-glider
Lightweight animated image description

## Demo
[Demo](http://davewoodhall.com/plugins/jQuery-glider/index.html)

### HTML Syntax

```javascript
<div class="glider">
	<h3>Title</h3>
	<img src="http://placehold.it/350x150" />
	<p>
		This text will be used as caption. <a href="#">Links are accepted.</a>
	</p>
</div>
```

### Initializing the code
$('.glider').glider();

### Options
Option  | Default value | Description
------------- | ------------- | -------------
format | square | `square` makes the element square, `auto` leaves the image aspect ratio
iconAfter | null | Use HTML to add an icon beneath the title
showTitle | true | Show the title when the element isn't hovered
speed | 250 | Effect speed

### Data attributes
Attribute | Default value | Set on | Description
------------- | ------------- | ------------- | -------------
data-type | (optional) | $('.glider') | `image-only` will just show the image, no effect or anything else