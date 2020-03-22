# gridsome-plugin-coffee

coffeescript plugin for Gridsome
> This plugin enable coffeescript in `*.vue` single file components and .coffee files.

### Install

* `npm install -D coffeescript coffee-loader gridsome-plugin-coffee`

### Usage

**1.** Add in your `gridsome.config` like this:

```javascript
module.exports = {
	plugins: [
		{
			use: 'gridsome-plugin-coffee'
		}
	]
};
```

**2.** Use `script lang="coffee"` in your `*.vue` files like this:

```javascript
<script lang="coffee">
	export default
		metaInfo:
			title: 'About us'
			bodyAttrs:
				class: 'about'
</script>
```