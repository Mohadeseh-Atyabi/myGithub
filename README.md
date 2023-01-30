# myGithub
<p align='center'>
  <img src="https://user-images.githubusercontent.com/72689599/215454798-02a5099c-c502-45e9-911e-1aee777b8e0c.png">
</p>

GitHub is a very famous service in the field of maintaining and versioning source codes. Many of you use this service on a daily basis. We intend to interact with this service by using the programming interfaces and extract the information of a user.

## Website
The middle rectangle should contain all your displayable content. This rectangle should be only the size of the content, but to display it more beautifully, use layering. What is displayed on the left side of the screen is a user's information extracted through programming interfaces. This information includes the user's picture, the user's full name, the user's blog address, and the user's place of residence. On the right side of the page, there is a form to enter and send the desired username in the GitHub service. GitHub's programming interface is very extensive. To get information about a user, you can send a GET request with the following structure:
```
https://api.github.com/users/{username}
```
If a user with the given username is not found, an appropriate error message should be displayed to the user. Do not use alert to display this message and, for example, allocate a part of the page to display it. If there is a problem sending the request to the GitHub service due to network reasons, a suitable message will be displayed on the screen. Keep in mind that this message should not be in the alert format either. As you may have noticed, the string you receive in the bio section contains characters such as newline. You need to think for the correct display of this part. In relation to the profile photo, you will also receive the photo link and just put it as src in an img element.

## Temporary memory
As you can guess, using GitHub programming interfaces is not free and you can have a certain number of free requests in a certain period. We want to prevent repeated requests to this service by using a temporary memory. After each request, you must save the information required by the person mentioned earlier in the form of a cookie in the browser and if the request is sent again for the same username, the contents will be displayed from the temporary memory. For better user understanding, an appropriate message will be displayed when the data is extracted from the temporary memory. You can use local storage instead of using cookies. For more information, you can get help from the following website.
```
https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
```

## Release
You can see the result of this project as a website in https://mohadeseh-atyabi.github.io/myGithub/.
