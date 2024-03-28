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

| Case                                                  | Contrast | Normal Text Rating    | Large Text Rating     | Evidence                                             |
| ----------------------------------------------------- | -------- | --------------------- | --------------------- | ---------------------------------------------------- |
| `theme-colour` text on a white background             | 2.62:1   | AA (fail), AAA (fail) | AA (fail), AAA (fail) | [Evidence](/docs/images/colour_contrast/green-1.png) |
| `theme-colour` text on a `theme-colour-10` background | 2.44:1   | AA (fail), AAA (fail) | AA (fail), AAA (fail) | [Evidence](/docs/images/colour_contrast/green-2.png) |
| black text on a `theme-color-10` background           | 15.14:1  | AA (pass), AAA (pass) | AA (pass), AAA (pass) | [Evidence](/docs/images/colour_contrast/green-3.png) |
| white text on a `theme-color-70` background           | 1.93:1   | AA (fail), AAA (fail) | AA (fail), AAA (fail) | [Evidence](/docs/images/colour_contrast/green-4.png) |

##### Blue

| Case                                                  | Contrast | Normal Text Rating    | Large Text Rating     | Evidence                                            |
| ----------------------------------------------------- | -------- | --------------------- | --------------------- | --------------------------------------------------- |
| `theme-colour` text on a white background             | 2.7:1    | AA (fail), AAA (fail) | AA (fail), AAA (fail) | [Evidence](/docs/images/colour_contrast/blue-1.png) |
| `theme-colour` text on a `theme-colour-10` background | 2.5:1    | AA (fail), AAA (fail) | AA (fail), AAA (fail) | [Evidence](/docs/images/colour_contrast/blue-2.png) |
| black text on a `theme-color-10` background           | 15.05:1  | AA (pass), AAA (pass) | AA (pass), AAA (pass) | [Evidence](/docs/images/colour_contrast/blue-3.png) |
| white text on a `theme-color-70` background           | 2:1      | AA (fail), AAA (fail) | AA (fail), AAA (fail) | [Evidence](/docs/images/colour_contrast/blue-4.png) |

##### Red

| Case                                                  | Contrast | Normal Text Rating    | Large Text Rating     | Evidence                                           |
| ----------------------------------------------------- | -------- | --------------------- | --------------------- | -------------------------------------------------- |
| `theme-colour` text on a white background             | 3.66:1   | AA (fail), AAA (fail) | AA (pass), AAA (fail) | [Evidence](/docs/images/colour_contrast/red-1.png) |
| `theme-colour` text on a `theme-colour-10` background | 3.29:1   | AA (fail), AAA (fail) | AA (pass), AAA (fail) | [Evidence](/docs/images/colour_contrast/red-2.png) |
| black text on a `theme-color-10` background           | 14.59:1  | AA (pass), AAA (pass) | AA (pass), AAA (pass) | [Evidence](/docs/images/colour_contrast/red-3.png) |
| white text on a `theme-color-70` background           | 2.55:1   | AA (fail), AAA (fail) | AA (fail), AAA (fail) | [Evidence](/docs/images/colour_contrast/red-4.png) |

##### Orange

| Case                                                  | Contrast | Normal Text Rating    | Large Text Rating     | Evidence                                              |
| ----------------------------------------------------- | -------- | --------------------- | --------------------- | ----------------------------------------------------- |
| `theme-colour` text on a white background             | 2.22:1   | AA (fail), AAA (fail) | AA (fail), AAA (fail) | [Evidence](/docs/images/colour_contrast/orange-1.png) |
| `theme-colour` text on a `theme-colour-10` background | 2.1:1    | AA (fail), AAA (fail) | AA (fail), AAA (fail) | [Evidence](/docs/images/colour_contrast/orange-2.png) |
| black text on a `theme-color-10` background           | 15.39:1  | AA (pass), AAA (pass) | AA (pass), AAA (pass) | [Evidence](/docs/images/colour_contrast/orange-3.png) |
| white text on a `theme-color-70` background           | 1.72:1   | AA (fail), AAA (fail) | AA (fail), AAA (fail) | [Evidence](/docs/images/colour_contrast/orange-4.png) |

##### Purple

| Case                                                  | Contrast | Normal Text Rating    | Large Text Rating     | Evidence                                              |
| ----------------------------------------------------- | -------- | --------------------- | --------------------- | ----------------------------------------------------- |
| `theme-colour` text on a white background             | 4.12:1   | AA (fail), AAA (fail) | AA (pass), AAA (fail) | [Evidence](/docs/images/colour_contrast/purple-1.png) |
| `theme-colour` text on a `theme-colour-10` background | 3.74:1   | AA (fail), AAA (fail) | AA (pass), AAA (fail) | [Evidence](/docs/images/colour_contrast/purple-2.png) |
| black text on a `theme-color-10` background           | 14.74:1  | AA (pass), AAA (pass) | AA (pass), AAA (pass) | [Evidence](/docs/images/colour_contrast/purple-3.png) |
| white text on a `theme-color-70` background           | 2.56:1   | AA (fail), AAA (fail) | AA (fail), AAA (fail) | [Evidence](/docs/images/colour_contrast/purple-4.png) |

##### Pink

| Case                                                  | Contrast | Normal Text Rating    | Large Text Rating     | Evidence                                            |
| ----------------------------------------------------- | -------- | --------------------- | --------------------- | --------------------------------------------------- |
| `theme-colour` text on a white background             | 2.05:1   | AA (fail), AAA (fail) | AA (fail), AAA (fail) | [Evidence](/docs/images/colour_contrast/pink-1.png) |
| `theme-colour` text on a `theme-colour-10` background | 1.96:1   | AA (fail), AAA (fail) | AA (fail), AAA (fail) | [Evidence](/docs/images/colour_contrast/pink-2.png) |
| black text on a `theme-color-10` background           | 15.51:1  | AA (pass), AAA (pass) | AA (pass), AAA (pass) | [Evidence](/docs/images/colour_contrast/pink-3.png) |
| white text on a `theme-color-70` background           | 1.64:1   | AA (fail), AAA (fail) | AA (fail), AAA (fail) | [Evidence](/docs/images/colour_contrast/pink-4.png) |

Following this initial accessibility audit, an [issue](https://github.com/SamuelJForrest/colourgrab-v2/issues/22) has been raised to rectify these accessibility issues.

#### Keyboard Navigation & Focus Order

For each of the routes - `home`, `palette` and `demo` - I tested navigating through each of these pages using a keyboard, to ensure that the focus order of elements were sensible. I have deemed each of these pages to have a sensible focus order.

It is also worth noting here, that because the colour palette modal is built using [a11y Dialog](https://a11y-dialog.netlify.app/), the focus trap for the modal (not allowing a user to focus away from the modal until it is closed).

## Backend

The backend testing for this application were written using [Pytest](https://docs.pytest.org/en/8.0.x/), and can found within the `tests/backend` directory. I have divided up the tests into the following categories, each with their own table:

1. Routes: All tests within `test_routes.py` relate to navigating between the app's different URLS.
2. Uploads: All tests within `test_uploads.py` relate to uploading different files through the main form.

More detailed results for these tests can be found in the [.coverage file](https://github.com/SamuelJForrest/colourgrab-v2/blob/main/.coverage)

### Routes

| Test Name                              | Description                                                                                                                                                                         | Pass/Fail          |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `home_page_exists`                     | Tests that a 200 status code is returned when a user attempts to visit the homepage url ('/')                                                                                       | :white_check_mark: |
| `palette_page_without_image`           | Tests that the user is redirected to the homepage with a flash message if they try to visit the palette page ('/palette') with no `uploaded_image` in the session.                  | :white_check_mark: |
| `palette_page_with_existing_image`     | Tests that the palette page returns a 200 status code when users visit it with an `uploaded_image` in the session, and that the file referenced by `uploaded_image` actually exists | :white_check_mark: |
| `palette_page_with_non_existent_image` | Test that the palette page redirects users to the home page, and displays a flash warning, if the image referenced by the `uploaded_image` session variable doesn't actually exist  | :white_check_mark: |
| `demo_page_exists`                     | Tests that the demo page returns a 200 status code when users visit the demo url ('/demo')                                                                                          | :white_check_mark: |

### Uploads

| Test Name                      | Description                                                                                                                                    | Pass/Fail          |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `allowed_file_upload`          | Tests that a file uploads successfully, and redirects the user to the palette page                                                             | :white_check_mark: |
| `large_file_upload`            | Tests that a user is redirected to the homepage, and a flash message is shown, when a user tries to upload in image larger than 5MB            | :white_check_mark: |
| `allowed_file_type_upload`     | Tests that files are uploaded successfully, and the user is redirected appropriately, if the file is the correct type (`.jpg`, `.png`, `.svg`) | :white_check_mark: |
| `not_allowed_file_type_upload` | Tests that users are redirected to the homepage, with a flash message, when they attempt to upload a disallowed file type                      | :white_check_mark: |
