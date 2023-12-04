# Design System

A simple Design System Library to assist in building of storybook components.
It is built with ReactJs, storybook and tailwindcss. In this first version, some configurations are not made available but it is to be noted as a Prototype (like Iron Man's mark 1 armor).

[Playground](https://design-system-three-tau.vercel.app/)


# Installation

**Note**:`react` and `react-dom` are to be installed as peer dependendies

Npm:`npm install akanimo-carbon-components`

Yarn: `yarn add akanimo-carbon-components`

# Usage

```javascript
import { Button } from "akanimo-carbon-components"

//rendering the component
<Button/>
```
Passing the prop

```javascript

<Button propName={"propValue"}/>
```

# Components

## Button 
Button component expects  2 props `variant` and `disabled`. The `variant` props can can be set to  number of values which are:
- danger
- primary
- secondary

More prop types would be added for more 
    
## Clipboard 
Generates a "copy-to-clipboard" button with a customizable tooltip. Expects a variant props which has two values that determines the position of the tooltip.
- top
- bottom

More configurations would be set later

## File Uploader
The file uploader component handles single file upload at the moment. Its default form is set to click-to-select method  of uploading files. To effect the drag-and-drop method, pass the value "dragAndDrop" into the `variant` prop.

## InlineLoader
The inlineLoader component has no prop whatsoever.

## InputField 
The inputfield component renders an input field, expects a `variant` props which can be set to a number of values to determine the input types. It's default value is "text", if the prop is not set.

- text
- number
- password

# Modal
The Modal UI component renders a modal with some preset content. More configurations would be made in the next version to allow for content to be set by the developer. The modal accepts the following props and their values attached.
- `variant` props
    - "danger" 
- `size` props with values:
    - "sm" - for a small size modal
    - "md" - for a medium sized modal
    - "lg" - for a large sized modal
- `scroll` props. It is set to true by default

# Pagination

The pagination UI component is used to manipulate how you want data displayed. It expects a number of props. For now it is provided by a pre-fixed  array of data, but would be changed in the next version for the developer to provide an array of data as props and set the amount of data to be displayed per page.

# Radio Button

A simple Radio button which displays a regular radio button as it's default  accepts a `variant` which value should be set to "disabled" for a disabled version of the button.

# Toggle

The toggle button has no customizable features  at the moment, more configurations would be added in the next release



















