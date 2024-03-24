# Testing

## Table of Contents

## Frontend

### Code Validation

#### HTML

The following pages were validated using the [Markup Validation Service](https://validator.w3.org/)

| Page | Results | Report |
| ---- | ------- | ------ |
|      |         |        |

#### CSS

The following files were tested using the [CSS Validation Service](https://jigsaw.w3.org/css-validator/)

| File | Result | Report |
| ---- | ------ | ------ |
|      |        |        |

#### JavaScript

The following files were tested using [JSHint](https://jshint.com/)

| File | Result | Report |
| ---- | ------ | ------ |
|      |        |        |

### Accessibility

#### Colour Contrast

Due to the nature of this site having multiple colour themes, I felt that it was important that colour contrast was accounted for. Every theme colour has three variants, which I will refer to in the following ways:

-   the main theme colour (`theme-colour`)
-   the main theme colour with an opacity of 0.7 (`theme-colour-70`)
-   the main theme colour with an opacity of 0.1 (`theme-colour-10`)

For each theme colour, I checked the following combinations:

-   `theme-colour` text on a white background
-   `theme-colour` text on a `theme-colour-10` background
-   black text on a `theme-colour-10` background
-   white text on a `theme-colour-70` background

**Note**: It is worth noting that for the following tests that when I refer to `white`, I am using this as a placeholder for `#fcfcfc`, and when I refer to `black`, this is a placeholder for `#1e1e1e`.

The colour contrasts were tested using [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/)

##### Green

| Case                                                  | Contrast | Normal Text Rating    | Large Text Rating     | Evidence                           |
| ----------------------------------------------------- | -------- | --------------------- | --------------------- | ---------------------------------- |
| `theme-colour` text on a white background             | 2.05:1   | AA (fail), AAA (fail) | AA (fail), AAA (fail) | [U+1F517](/docs/images/pink-1.png) |
| `theme-colour` text on a `theme-colour-10` background | 1.96:1   | AA (fail), AAA (fail) | AA (fail), AAA (fail) | [U+1F517](/docs/images/pink-2.png) |
| black text on a `theme-color-10` background           | 15.51:1  | AA (pass), AAA (pass) | AA (pass), AAA (pass) | [U+1F517](/docs/images/pink-3.png) |
| white text on a `theme-color-70` background           | 1.64:1   | AA (fail), AAA (fail) | AA (fail), AAA (fail) | [U+1F517](/docs/images/pink-4.png) |

##### Blue

| Case                                                  | Contrast | Accessibility Level |
| ----------------------------------------------------- | -------- | ------------------- |
| `theme-colour` text on a white background             |          |                     |
| `theme-colour` text on a `theme-colour-10` background |          |                     |
| black text on a `theme-color-10` background           |          |                     |
| white text on a `theme-color-70` background           |          |                     |

##### Red

| Case                                                  | Contrast | Accessibility Level |
| ----------------------------------------------------- | -------- | ------------------- |
| `theme-colour` text on a white background             |          |                     |
| `theme-colour` text on a `theme-colour-10` background |          |                     |
| black text on a `theme-color-10` background           |          |                     |
| white text on a `theme-color-70` background           |          |                     |

##### Orange

| Case                                                  | Contrast | Accessibility Level |
| ----------------------------------------------------- | -------- | ------------------- |
| `theme-colour` text on a white background             |          |                     |
| `theme-colour` text on a `theme-colour-10` background |          |                     |
| black text on a `theme-color-10` background           |          |                     |
| white text on a `theme-color-70` background           |          |                     |

##### Purple

| Case                                                  | Contrast | Accessibility Level |
| ----------------------------------------------------- | -------- | ------------------- |
| `theme-colour` text on a white background             |          |                     |
| `theme-colour` text on a `theme-colour-10` background |          |                     |
| black text on a `theme-color-10` background           |          |                     |
| white text on a `theme-color-70` background           |          |                     |

##### Pink

| Case                                                  | Contrast | Accessibility Level |
| ----------------------------------------------------- | -------- | ------------------- |
| `theme-colour` text on a white background             |          |                     |
| `theme-colour` text on a `theme-colour-10` background |          |                     |
| black text on a `theme-color-10` background           |          |                     |
| white text on a `theme-color-70` background           |          |                     |

#### Keyboard Navigation & Focus Order

## Backend
