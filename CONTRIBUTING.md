# Contribution guide
If you want to become a contributor of this project, you may need to follow the next 
guidelines:

## Styling guidelines
Even if they seems pedantic, styling is essential to mantain the code clean and readable 
for everyone, so pay special attention to these guidelines.

1. Use 2 SPACES to indent.  
Even if the tabs are faster when navigating and are stored on disk as one byte-character, 
formatters, like Prettier, use 2 spaces instead of tabs. To keep indention standarized, 
use 2 SPACES to indent.
2. Use `;` to finish simple sentences, type definitions and arrow-functions declared as 
`const`.  
If you, like me, likes the `;`, you're lucky. `;` is by default in most formatters, so 
use `;` to make happy to the code formatter.
3. Use `"` instead of `'`  
This is a more opinionated rule, but it's for the sake of code standarization. Also, it 
will make the mantainer's job easier, by avoiding verbosity of changes registered by `git`. 
4. Do not use whitespacing in empty brackets.  
This, as the later rule, is just a *personal* prefference. Various formatters don't whitespace 
the empty brackets by default, so we will keep that format.

## Steps to add a new feature
If you follow the above rules, you can now start by adding your new feature.  
First, fork this repo using your GitHub account and pressing the `Forks` button.

Once you forked the repo, create a new branch with `git checkout -b <your-github-username>/<feature-name>` 
and do your stuff. Please check if there's no other people working on the same feature yet and 
contact them to sync the changes and keep everything in order.

Push your local code to your fork on GitHub and then go back to the project's official repo. 
Once there, you should be asked to open a **Pull Request** and open it. 
Use a descriptive tittle and describe the changes you made. Then finish your PR and the 
mantainer will aprove or disaprove your PR.

## Steps to resolve an issue
First, fork this repo using your GitHub account and pressing the `Forks` button.

Once you forked the repo, create a new branch with `git checkout -b <your-github-username>/issue-<issue-number>` 
and do your stuff. Please check if there's no other people working on the same issue yet and 
contact them to sync the changes and keep everything in order.

Push your local code to your fork on GitHub and then go back to the project's official repo. 
Once there, you should be asked to open a **Pull Request** and open it. 
Use a descriptive tittle and describe the changes you made. Then finish your PR and the 
mantainer will aprove or disaprove your PR.

## To the mantainers only
If you aprove the pull and merge request of a contributor, add its username to the 
[`CONTRIBUTORS.md`](./CONTRIBUTORS.md) file. 


